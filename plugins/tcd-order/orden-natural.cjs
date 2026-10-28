// Isolated experiment. Pure ordering adapter: no filesystem, network, global registration or renderer fork.
// Sorting changes entry positions only; original title, slug, links and properties are preserved.
const primary=new Intl.Collator('es-ES',{usage:'sort',numeric:true,sensitivity:'base',ignorePunctuation:false});
const secondary=new Intl.Collator('es-ES',{usage:'sort',numeric:true,sensitivity:'variant',caseFirst:'false',ignorePunctuation:false});
const title=e=>String(e.title??'').normalize('NFC').trim();
const ordinal=(a,b)=>a<b?-1:a>b?1:0;
function compareEntries(a,b){const at=title(a),bt=title(b);if(!at||!bt){if(!at&&bt)return 1;if(at&&!bt)return-1;}return primary.compare(at,bt)||secondary.compare(at,bt)||ordinal(String(a.slug??''),String(b.slug??''));}
function adaptList(nativeRender,targetSlug,names=['Tabla','Vista']){return props=>props.slug===targetSlug&&names.includes(props.view.name)?nativeRender({...props,entries:[...props.entries].sort(compareEntries)}):nativeRender(props);}
module.exports={compareEntries,adaptList,primaryOptions:primary.resolvedOptions(),secondaryOptions:secondary.resolvedOptions(),rules:{locale:'Spanish',numeric:true,accentAndCase:'Primary base comparison, secondary variant comparison',tieBreak:'Exact slug codepoint order',emptyTitles:'Last; raw title remains unchanged',dateFieldsUsed:false}};
