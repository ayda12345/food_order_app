/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { decimalDigest } from '../digest';
import { Serializer, SimplePlaceholderMapper } from './serializer';
import * as xml from './xml_helper';
const _MESSAGES_TAG = 'messagebundle';
const _MESSAGE_TAG = 'msg';
const _PLACEHOLDER_TAG = 'ph';
const _EXAMPLE_TAG = 'ex';
const _SOURCE_TAG = 'source';
const _DOCTYPE = `<!ELEMENT messagebundle (msg)*>
<!ATTLIST messagebundle class CDATA #IMPLIED>

<!ELEMENT msg (#PCDATA|ph|source)*>
<!ATTLIST msg id CDATA #IMPLIED>
<!ATTLIST msg seq CDATA #IMPLIED>
<!ATTLIST msg name CDATA #IMPLIED>
<!ATTLIST msg desc CDATA #IMPLIED>
<!ATTLIST msg meaning CDATA #IMPLIED>
<!ATTLIST msg obsolete (obsolete) #IMPLIED>
<!ATTLIST msg xml:space (default|preserve) "default">
<!ATTLIST msg is_hidden CDATA #IMPLIED>

<!ELEMENT source (#PCDATA)>

<!ELEMENT ph (#PCDATA|ex)*>
<!ATTLIST ph name CDATA #REQUIRED>

<!ELEMENT ex (#PCDATA)>`;
export class Xmb extends Serializer {
    write(messages, locale) {
        const exampleVisitor = new ExampleVisitor();
        const visitor = new _Visitor();
        let rootNode = new xml.Tag(_MESSAGES_TAG);
        messages.forEach(message => {
            const attrs = { id: message.id };
            if (message.description) {
                attrs['desc'] = message.description;
            }
            if (message.meaning) {
                attrs['meaning'] = message.meaning;
            }
            let sourceTags = [];
            message.sources.forEach((source) => {
                sourceTags.push(new xml.Tag(_SOURCE_TAG, {}, [new xml.Text(`${source.filePath}:${source.startLine}${source.endLine !== source.startLine ? ',' + source.endLine : ''}`)]));
            });
            rootNode.children.push(new xml.CR(2), new xml.Tag(_MESSAGE_TAG, attrs, [...sourceTags, ...visitor.serialize(message.nodes)]));
        });
        rootNode.children.push(new xml.CR());
        return xml.serialize([
            new xml.Declaration({ version: '1.0', encoding: 'UTF-8' }),
            new xml.CR(),
            new xml.Doctype(_MESSAGES_TAG, _DOCTYPE),
            new xml.CR(),
            exampleVisitor.addDefaultExamples(rootNode),
            new xml.CR(),
        ]);
    }
    load(content, url) {
        throw new Error('Unsupported');
    }
    digest(message) {
        return digest(message);
    }
    createNameMapper(message) {
        return new SimplePlaceholderMapper(message, toPublicName);
    }
}
class _Visitor {
    visitText(text, context) {
        return [new xml.Text(text.value)];
    }
    visitContainer(container, context) {
        const nodes = [];
        container.children.forEach((node) => nodes.push(...node.visit(this)));
        return nodes;
    }
    visitIcu(icu, context) {
        const nodes = [new xml.Text(`{${icu.expressionPlaceholder}, ${icu.type}, `)];
        Object.keys(icu.cases).forEach((c) => {
            nodes.push(new xml.Text(`${c} {`), ...icu.cases[c].visit(this), new xml.Text(`} `));
        });
        nodes.push(new xml.Text(`}`));
        return nodes;
    }
    visitTagPlaceholder(ph, context) {
        const startTagAsText = new xml.Text(`<${ph.tag}>`);
        const startEx = new xml.Tag(_EXAMPLE_TAG, {}, [startTagAsText]);
        // TC requires PH to have a non empty EX, and uses the text node to show the "original" value.
        const startTagPh = new xml.Tag(_PLACEHOLDER_TAG, { name: ph.startName }, [startEx, startTagAsText]);
        if (ph.isVoid) {
            // void tags have no children nor closing tags
            return [startTagPh];
        }
        const closeTagAsText = new xml.Text(`</${ph.tag}>`);
        const closeEx = new xml.Tag(_EXAMPLE_TAG, {}, [closeTagAsText]);
        // TC requires PH to have a non empty EX, and uses the text node to show the "original" value.
        const closeTagPh = new xml.Tag(_PLACEHOLDER_TAG, { name: ph.closeName }, [closeEx, closeTagAsText]);
        return [startTagPh, ...this.serialize(ph.children), closeTagPh];
    }
    visitPlaceholder(ph, context) {
        const interpolationAsText = new xml.Text(`{{${ph.value}}}`);
        // Example tag needs to be not-empty for TC.
        const exTag = new xml.Tag(_EXAMPLE_TAG, {}, [interpolationAsText]);
        return [
            // TC requires PH to have a non empty EX, and uses the text node to show the "original" value.
            new xml.Tag(_PLACEHOLDER_TAG, { name: ph.name }, [exTag, interpolationAsText])
        ];
    }
    visitIcuPlaceholder(ph, context) {
        const icuExpression = ph.value.expression;
        const icuType = ph.value.type;
        const icuCases = Object.keys(ph.value.cases).map((value) => value + ' {...}').join(' ');
        const icuAsText = new xml.Text(`{${icuExpression}, ${icuType}, ${icuCases}}`);
        const exTag = new xml.Tag(_EXAMPLE_TAG, {}, [icuAsText]);
        return [
            // TC requires PH to have a non empty EX, and uses the text node to show the "original" value.
            new xml.Tag(_PLACEHOLDER_TAG, { name: ph.name }, [exTag, icuAsText])
        ];
    }
    serialize(nodes) {
        return [].concat(...nodes.map(node => node.visit(this)));
    }
}
export function digest(message) {
    return decimalDigest(message);
}
// TC requires at least one non-empty example on placeholders
class ExampleVisitor {
    addDefaultExamples(node) {
        node.visit(this);
        return node;
    }
    visitTag(tag) {
        if (tag.name === _PLACEHOLDER_TAG) {
            if (!tag.children || tag.children.length == 0) {
                const exText = new xml.Text(tag.attrs['name'] || '...');
                tag.children = [new xml.Tag(_EXAMPLE_TAG, {}, [exText])];
            }
        }
        else if (tag.children) {
            tag.children.forEach(node => node.visit(this));
        }
    }
    visitText(text) { }
    visitDeclaration(decl) { }
    visitDoctype(doctype) { }
}
// XMB/XTB placeholders can only contain A-Z, 0-9 and _
export function toPublicName(internalName) {
    return internalName.toUpperCase().replace(/[^A-Z0-9_]/g, '_');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieG1iLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL2kxOG4vc2VyaWFsaXplcnMveG1iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFHeEMsT0FBTyxFQUFvQixVQUFVLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDcEYsT0FBTyxLQUFLLEdBQUcsTUFBTSxjQUFjLENBQUM7QUFFcEMsTUFBTSxhQUFhLEdBQUcsZUFBZSxDQUFDO0FBQ3RDLE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQztBQUMzQixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUM5QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDMUIsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBRTdCLE1BQU0sUUFBUSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBa0JPLENBQUM7QUFFekIsTUFBTSxPQUFPLEdBQUksU0FBUSxVQUFVO0lBQ3hCLEtBQUssQ0FBQyxRQUF3QixFQUFFLE1BQW1CO1FBQzFELE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDNUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFMUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QixNQUFNLEtBQUssR0FBMEIsRUFBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBRXRELElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDdkIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7YUFD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WUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUM3QyxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztnQkFDeEQsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzFEO1NBQ0Y7YUFBTSxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDdkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLElBQWMsSUFBUyxDQUFDO0lBQ2xDLGdCQUFnQixDQUFDLElBQXFCLElBQVMsQ0FBQztJQUNoRCxZQUFZLENBQUMsT0FBb0IsSUFBUyxDQUFDO0NBQzVDO0FBRUQsdURBQXVEO0FBQ3ZELE1BQU0sVUFBVSxZQUFZLENBQUMsWUFBb0I7SUFDL0MsT0FBTyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7ZGVjaW1hbERpZ2VzdH0gZnJvbSAnLi4vZGlnZXN0JztcbmltcG9ydCAqIGFzIGkxOG4gZnJvbSAnLi4vaTE4bl9hc3QnO1xuXG5pbXBvcnQge1BsYWNlaG9sZGVyTWFwcGVyLCBTZXJpYWxpemVyLCBTaW1wbGVQbGFjZWhvbGRlck1hcHBlcn0gZnJvbSAnLi9zZXJpYWxpemVyJztcbmltcG9ydCAqIGFzIHhtbCBmcm9tICcuL3htbF9oZWxwZXInO1xuXG5jb25zdCBfTUVTU0FHRVNfVEFHID0gJ21lc3NhZ2VidW5kbGUnO1xuY29uc3QgX01FU1NBR0VfVEFHID0gJ21zZyc7XG5jb25zdCBfUExBQ0VIT0xERVJfVEFHID0gJ3BoJztcbmNvbnN0IF9FWEFNUExFX1RBRyA9ICdleCc7XG5jb25zdCBfU09VUkNFX1RBRyA9ICdzb3VyY2UnO1xuXG5jb25zdCBfRE9DVFlQRSA9IGA8IUVMRU1FTlQgbWVzc2FnZWJ1bmRsZSAobXNnKSo+XG48IUFUVExJU1QgbWVzc2FnZWJ1bmRsZSBjbGFzcyBDREFUQSAjSU1QTElFRD5cblxuPCFFTEVNRU5UIG1zZyAoI1BDREFUQXxwaHxzb3VyY2UpKj5cbjwhQVRUTElTVCBtc2cgaWQgQ0RBVEEgI0lNUExJRUQ+XG48IUFUVExJU1QgbXNnIHNlcSBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgbmFtZSBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgZGVzYyBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgbWVhbmluZyBDREFUQSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgb2Jzb2xldGUgKG9ic29sZXRlKSAjSU1QTElFRD5cbjwhQVRUTElTVCBtc2cgeG1sOnNwYWNlIChkZWZhdWx0fHByZXNlcnZlKSBcImRlZmF1bHRcIj5cbjwhQVRUTElTVCBtc2cgaXNfaGlkZGVuIENEQVRBICNJTVBMSUVEPlxuXG48IUVMRU1FTlQgc291cmNlICgjUENEQVRBKT5cblxuPCFFTEVNRU5UIHBoICgjUENEQVRBfGV4KSo+XG48IUFUVExJU1QgcGggbmFtZSBDREFUQSAjUkVRVUlSRUQ+XG5cbjwhRUxFTUVOVCBleCAoI1BDREFUQSk+YDtcblxuZXhwb3J0IGNsYXNzIFhtYiBleHRlbmRzIFNlcmlhbGl6ZXIge1xuICBvdmVycmlkZSB3cml0ZShtZXNzYWdlczogaTE4bi5NZXNzYWdlW10sIGxvY2FsZTogc3RyaW5nfG51bGwpOiBzdHJpbmcge1xuICAgIGNvbnN0IGV4YW1wbGVWaXNpdG9yID0gbmV3IEV4YW1wbGVWaXNpdG9yKCk7XG4gICAgY29uc3QgdmlzaXRvciA9IG5ldyBfVmlzaXRvcigpO1xuICAgIGxldCByb290Tm9kZSA9IG5ldyB4bWwuVGFnKF9NRVNTQUdFU19UQUcpO1xuXG4gICAgbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcbiAgICAgIGNvbnN0IGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7aWQ6IG1lc3NhZ2UuaWR9O1xuXG4gICAgICBpZiAobWVzc2FnZS5kZXNjcmlwdGlvbikge1xuICAgICAgICBhdHRyc1snZGVzYyddID0gbWVzc2FnZS5kZXNjcmlwdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lc3NhZ2UubWVhbmluZykge1xuICAgICAgICBhdHRyc1snbWVhbmluZyddID0gbWVzc2FnZS5tZWFuaW5nO1xuICAgICAgfVxuXG4gICAgICBsZXQgc291cmNlVGFnczogeG1sLlRhZ1tdID0gW107XG4gICAgICBtZXNzYWdlLnNvdXJjZXMuZm9yRWFjaCgoc291cmNlOiBpMThuLk1lc3NhZ2VTcGFuKSA9PiB7XG4gICAgICAgIHNvdXJjZVRhZ3MucHVzaChuZXcgeG1sLlRhZyhcbiAgICAgICAgICAgIF9TT1VSQ0VfVEFHLCB7fSxcbiAgICAgICAgICAgIFtuZXcgeG1sLlRleHQoYCR7c291cmNlLmZpbGVQYXRofToke3NvdXJjZS5zdGFydExpbmV9JHtcbiAgICAgICAgICAgICAgICBzb3VyY2UuZW5kTGluZSAhPT0gc291cmNlLnN0YXJ0TGluZSA/ICcsJyArIHNvdXJjZS5lbmRMaW5lIDogJyd9YCldKSk7XG4gICAgICB9KTtcblxuICAgICAgcm9vdE5vZGUuY2hpbGRyZW4ucHVzaChcbiAgICAgICAgICBuZXcgeG1sLkNSKDIpLFxuICAgICAgICAgIG5ldyB4bWwuVGFnKF9NRVNTQUdFX1RBRywgYXR0cnMsIFsuLi5zb3VyY2VUYWdzLCAuLi52aXNpdG9yLnNlcmlhbGl6ZShtZXNzYWdlLm5vZGVzKV0pKTtcbiAgICB9KTtcblxuICAgIHJvb3ROb2RlLmNoaWxkcmVuLnB1c2gobmV3IHhtbC5DUigpKTtcblxuICAgIHJldHVybiB4bWwuc2VyaWFsaXplKFtcbiAgICAgIG5ldyB4bWwuRGVjbGFyYXRpb24oe3ZlcnNpb246ICcxLjAnLCBlbmNvZGluZzogJ1VURi04J30pLFxuICAgICAgbmV3IHhtbC5DUigpLFxuICAgICAgbmV3IHhtbC5Eb2N0eXBlKF9NRVNTQUdFU19UQUcsIF9ET0NUWVBFKSxcbiAgICAgIG5ldyB4bWwuQ1IoKSxcbiAgICAgIGV4YW1wbGVWaXNpdG9yLmFkZERlZmF1bHRFeGFtcGxlcyhyb290Tm9kZSksXG4gICAgICBuZXcgeG1sLkNSKCksXG4gICAgXSk7XG4gIH1cblxuICBvdmVycmlkZSBsb2FkKGNvbnRlbnQ6IHN0cmluZywgdXJsOiBzdHJpbmcpOlxuICAgICAge2xvY2FsZTogc3RyaW5nLCBpMThuTm9kZXNCeU1zZ0lkOiB7W21zZ0lkOiBzdHJpbmddOiBpMThuLk5vZGVbXX19IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vuc3VwcG9ydGVkJyk7XG4gIH1cblxuICBvdmVycmlkZSBkaWdlc3QobWVzc2FnZTogaTE4bi5NZXNzYWdlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGlnZXN0KG1lc3NhZ2UpO1xuICB9XG5cblxuICBvdmVycmlkZSBjcmVhdGVOYW1lTWFwcGVyKG1lc3NhZ2U6IGkxOG4uTWVzc2FnZSk6IFBsYWNlaG9sZGVyTWFwcGVyIHtcbiAgICByZXR1cm4gbmV3IFNpbXBsZVBsYWNlaG9sZGVyTWFwcGVyKG1lc3NhZ2UsIHRvUHVibGljTmFtZSk7XG4gIH1cbn1cblxuY2xhc3MgX1Zpc2l0b3IgaW1wbGVtZW50cyBpMThuLlZpc2l0b3Ige1xuICB2aXNpdFRleHQodGV4dDogaTE4bi5UZXh0LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgcmV0dXJuIFtuZXcgeG1sLlRleHQodGV4dC52YWx1ZSldO1xuICB9XG5cbiAgdmlzaXRDb250YWluZXIoY29udGFpbmVyOiBpMThuLkNvbnRhaW5lciwgY29udGV4dDogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXM6IHhtbC5Ob2RlW10gPSBbXTtcbiAgICBjb250YWluZXIuY2hpbGRyZW4uZm9yRWFjaCgobm9kZTogaTE4bi5Ob2RlKSA9PiBub2Rlcy5wdXNoKC4uLm5vZGUudmlzaXQodGhpcykpKTtcbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICB2aXNpdEljdShpY3U6IGkxOG4uSWN1LCBjb250ZXh0PzogYW55KTogeG1sLk5vZGVbXSB7XG4gICAgY29uc3Qgbm9kZXMgPSBbbmV3IHhtbC5UZXh0KGB7JHtpY3UuZXhwcmVzc2lvblBsYWNlaG9sZGVyfSwgJHtpY3UudHlwZX0sIGApXTtcblxuICAgIE9iamVjdC5rZXlzKGljdS5jYXNlcykuZm9yRWFjaCgoYzogc3RyaW5nKSA9PiB7XG4gICAgICBub2Rlcy5wdXNoKG5ldyB4bWwuVGV4dChgJHtjfSB7YCksIC4uLmljdS5jYXNlc1tjXS52aXNpdCh0aGlzKSwgbmV3IHhtbC5UZXh0KGB9IGApKTtcbiAgICB9KTtcblxuICAgIG5vZGVzLnB1c2gobmV3IHhtbC5UZXh0KGB9YCkpO1xuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgdmlzaXRUYWdQbGFjZWhvbGRlcihwaDogaTE4bi5UYWdQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IHN0YXJ0VGFnQXNUZXh0ID0gbmV3IHhtbC5UZXh0KGA8JHtwaC50YWd9PmApO1xuICAgIGNvbnN0IHN0YXJ0RXggPSBuZXcgeG1sLlRhZyhfRVhBTVBMRV9UQUcsIHt9LCBbc3RhcnRUYWdBc1RleHRdKTtcbiAgICAvLyBUQyByZXF1aXJlcyBQSCB0byBoYXZlIGEgbm9uIGVtcHR5IEVYLCBhbmQgdXNlcyB0aGUgdGV4dCBub2RlIHRvIHNob3cgdGhlIFwib3JpZ2luYWxcIiB2YWx1ZS5cbiAgICBjb25zdCBzdGFydFRhZ1BoID1cbiAgICAgICAgbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge25hbWU6IHBoLnN0YXJ0TmFtZX0sIFtzdGFydEV4LCBzdGFydFRhZ0FzVGV4dF0pO1xuICAgIGlmIChwaC5pc1ZvaWQpIHtcbiAgICAgIC8vIHZvaWQgdGFncyBoYXZlIG5vIGNoaWxkcmVuIG5vciBjbG9zaW5nIHRhZ3NcbiAgICAgIHJldHVybiBbc3RhcnRUYWdQaF07XG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VUYWdBc1RleHQgPSBuZXcgeG1sLlRleHQoYDwvJHtwaC50YWd9PmApO1xuICAgIGNvbnN0IGNsb3NlRXggPSBuZXcgeG1sLlRhZyhfRVhBTVBMRV9UQUcsIHt9LCBbY2xvc2VUYWdBc1RleHRdKTtcbiAgICAvLyBUQyByZXF1aXJlcyBQSCB0byBoYXZlIGEgbm9uIGVtcHR5IEVYLCBhbmQgdXNlcyB0aGUgdGV4dCBub2RlIHRvIHNob3cgdGhlIFwib3JpZ2luYWxcIiB2YWx1ZS5cbiAgICBjb25zdCBjbG9zZVRhZ1BoID1cbiAgICAgICAgbmV3IHhtbC5UYWcoX1BMQUNFSE9MREVSX1RBRywge25hbWU6IHBoLmNsb3NlTmFtZX0sIFtjbG9zZUV4LCBjbG9zZVRhZ0FzVGV4dF0pO1xuXG4gICAgcmV0dXJuIFtzdGFydFRhZ1BoLCAuLi50aGlzLnNlcmlhbGl6ZShwaC5jaGlsZHJlbiksIGNsb3NlVGFnUGhdO1xuICB9XG5cbiAgdmlzaXRQbGFjZWhvbGRlcihwaDogaTE4bi5QbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGludGVycG9sYXRpb25Bc1RleHQgPSBuZXcgeG1sLlRleHQoYHt7JHtwaC52YWx1ZX19fWApO1xuICAgIC8vIEV4YW1wbGUgdGFnIG5lZWRzIHRvIGJlIG5vdC1lbXB0eSBmb3IgVEMuXG4gICAgY29uc3QgZXhUYWcgPSBuZXcgeG1sLlRhZyhfRVhBTVBMRV9UQUcsIHt9LCBbaW50ZXJwb2xhdGlvbkFzVGV4dF0pO1xuICAgIHJldHVybiBbXG4gICAgICAvLyBUQyByZXF1aXJlcyBQSCB0byBoYXZlIGEgbm9uIGVtcHR5IEVYLCBhbmQgdXNlcyB0aGUgdGV4dCBub2RlIHRvIHNob3cgdGhlIFwib3JpZ2luYWxcIiB2YWx1ZS5cbiAgICAgIG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtuYW1lOiBwaC5uYW1lfSwgW2V4VGFnLCBpbnRlcnBvbGF0aW9uQXNUZXh0XSlcbiAgICBdO1xuICB9XG5cbiAgdmlzaXRJY3VQbGFjZWhvbGRlcihwaDogaTE4bi5JY3VQbGFjZWhvbGRlciwgY29udGV4dD86IGFueSk6IHhtbC5Ob2RlW10ge1xuICAgIGNvbnN0IGljdUV4cHJlc3Npb24gPSBwaC52YWx1ZS5leHByZXNzaW9uO1xuICAgIGNvbnN0IGljdVR5cGUgPSBwaC52YWx1ZS50eXBlO1xuICAgIGNvbnN0IGljdUNhc2VzID0gT2JqZWN0LmtleXMocGgudmFsdWUuY2FzZXMpLm1hcCgodmFsdWU6IHN0cmluZykgPT4gdmFsdWUgKyAnIHsuLi59Jykuam9pbignICcpO1xuICAgIGNvbnN0IGljdUFzVGV4dCA9IG5ldyB4bWwuVGV4dChgeyR7aWN1RXhwcmVzc2lvbn0sICR7aWN1VHlwZX0sICR7aWN1Q2FzZXN9fWApO1xuICAgIGNvbnN0IGV4VGFnID0gbmV3IHhtbC5UYWcoX0VYQU1QTEVfVEFHLCB7fSwgW2ljdUFzVGV4dF0pO1xuICAgIHJldHVybiBbXG4gICAgICAvLyBUQyByZXF1aXJlcyBQSCB0byBoYXZlIGEgbm9uIGVtcHR5IEVYLCBhbmQgdXNlcyB0aGUgdGV4dCBub2RlIHRvIHNob3cgdGhlIFwib3JpZ2luYWxcIiB2YWx1ZS5cbiAgICAgIG5ldyB4bWwuVGFnKF9QTEFDRUhPTERFUl9UQUcsIHtuYW1lOiBwaC5uYW1lfSwgW2V4VGFnLCBpY3VBc1RleHRdKVxuICAgIF07XG4gIH1cblxuICBzZXJpYWxpemUobm9kZXM6IGkxOG4uTm9kZVtdKTogeG1sLk5vZGVbXSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5ub2Rlcy5tYXAobm9kZSA9PiBub2RlLnZpc2l0KHRoaXMpKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZ2VzdChtZXNzYWdlOiBpMThuLk1lc3NhZ2UpOiBzdHJpbmcge1xuICByZXR1cm4gZGVjaW1hbERpZ2VzdChtZXNzYWdlKTtcbn1cblxuLy8gVEMgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIG5vbi1lbXB0eSBleGFtcGxlIG9uIHBsYWNlaG9sZGVyc1xuY2xhc3MgRXhhbXBsZVZpc2l0b3IgaW1wbGVtZW50cyB4bWwuSVZpc2l0b3Ige1xuICBhZGREZWZhdWx0RXhhbXBsZXMobm9kZTogeG1sLk5vZGUpOiB4bWwuTm9kZSB7XG4gICAgbm9kZS52aXNpdCh0aGlzKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHZpc2l0VGFnKHRhZzogeG1sLlRhZyk6IHZvaWQge1xuICAgIGlmICh0YWcubmFtZSA9PT0gX1BMQUNFSE9MREVSX1RBRykge1xuICAgICAgaWYgKCF0YWcuY2hpbGRyZW4gfHwgdGFnLmNoaWxkcmVuLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNvbnN0IGV4VGV4dCA9IG5ldyB4bWwuVGV4dCh0YWcuYXR0cnNbJ25hbWUnXSB8fCAnLi4uJyk7XG4gICAgICAgIHRhZy5jaGlsZHJlbiA9IFtuZXcgeG1sLlRhZyhfRVhBTVBMRV9UQUcsIHt9LCBbZXhUZXh0XSldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGFnLmNoaWxkcmVuKSB7XG4gICAgICB0YWcuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IG5vZGUudmlzaXQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHZpc2l0VGV4dCh0ZXh0OiB4bWwuVGV4dCk6IHZvaWQge31cbiAgdmlzaXREZWNsYXJhdGlvbihkZWNsOiB4bWwuRGVjbGFyYXRpb24pOiB2b2lkIHt9XG4gIHZpc2l0RG9jdHlwZShkb2N0eXBlOiB4bWwuRG9jdHlwZSk6IHZvaWQge31cbn1cblxuLy8gWE1CL1hUQiBwbGFjZWhvbGRlcnMgY2FuIG9ubHkgY29udGFpbiBBLVosIDAtOSBhbmQgX1xuZXhwb3J0IGZ1bmN0aW9uIHRvUHVibGljTmFtZShpbnRlcm5hbE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBpbnRlcm5hbE5hbWUudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV9dL2csICdfJyk7XG59XG4iXX0=