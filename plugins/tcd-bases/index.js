import { BasesPage as NativeBasesPage, BasesTransformer } from '@quartz-community/bases-page'
import { BasesBody } from '@quartz-community/bases-page/components'
import { viewRegistry } from '@quartz-community/bases-page/registry'
import render from 'preact-render-to-string'
import order from '../tcd-order/orden-natural.cjs'
export { BasesTransformer }
export const manifest = { name:'tcd-bases', displayName:'Bases TCD', version:'1.0.0', category:['transformer','pageType'], defaultOrder:50 }
const target = 'km-0---inicio-del-atlas/{km-0}---inicio-del-atlas.base'
let nativeList
// Same public native registry bootstrap as in the accepted prototype.
// These empty server-only props never enter the Atlas or the emitted index.
function getNativeList(cfg) {
 if (!nativeList) {
  render(BasesBody()({cfg,fileData:{slug:'__registry_only__',basesData:{views:[{type:'list',name:'registry'}]}},allFiles:[],ctx:{allSlugs:[]}}))
  nativeList=viewRegistry.get('list')?.render
  if(typeof nativeList!=='function')throw Error('Native Bases list renderer unavailable')
 }
 return nativeList
}
export function BasesPage(options={}) {
 const native=NativeBasesPage(options)
 return {...native,body(bodyOptions={}) {
  const opts={...options,...bodyOptions},normal=native.body(opts)
  const component=props=>{
   if(props.fileData.slug!==target)return normal(props)
   const base=props.fileData.basesOptions??opts
   const customViews={...base.customViews,list:order.adaptList(getNativeList(props.cfg),target,['Vista'])}
   return normal({...props,fileData:{...props.fileData,basesOptions:{...base,customViews}}})
  }
  Object.assign(component,normal)
  return component
 }}
}
