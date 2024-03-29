import { renderToWebStream } from 'vue/server-renderer'
import { createApp } from './main'

export function render(url, templ) {
  const { app } = createApp()

  // passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugin-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.
  
  //console.log('render.url = ',url)
  const ctx = {
	  payload:{
		  url: url,
		  data: {
			  val: 12345,
		  }
	  }
  }
  const stream = renderToWebStream(app, ctx)


  return { stream }
}
