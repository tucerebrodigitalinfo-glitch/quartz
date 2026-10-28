import { TagPage } from '@quartz-community/tag-page'
import order from '../tcd-order/orden-natural.cjs'
export const manifest={name:'tcd-tags',displayName:'Etiquetas por título TCD',version:'1.0.0',category:'pageType'}
const isCatalog=slug=>['tags','tags/','tags/index'].includes(slug)
const compare=(a,b)=>order.compareEntries({title:a.frontmatter?.title??'',slug:a.slug},{title:b.frontmatter?.title??'',slug:b.slug})
export default function TitleTagPage(options={}) {
 const native=TagPage(options)
 return {...native,body(bodyOptions={}) {
  const normal=native.body({...options,...bodyOptions}),sorted=native.body({...options,...bodyOptions,sort:compare})
  const component=props=>(isCatalog(props.fileData.slug)?normal:sorted)(props)
  Object.assign(component,normal)
  return component
 }}
}
