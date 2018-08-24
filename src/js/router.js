import VueRouter from 'vue-router'
import bj from "../component/bj/bj.vue"
import loadnext from "../component/loading/loadnext.vue"

import entry from "../component/entry/entry.vue"
import list from "../component/entry/list.vue"
import classify from "../component/entry/classify.vue"
import special from "../component/entry/special.vue"
import search from "../component/entry/search.vue"
import me from "../component/entry/me.vue"
import register from "../component/register/register.vue"
import shujia from "../component/shujia/shujia.vue"
import shezi from "../component/shujia/shezi.vue"
import novel from "../component/novel/novel.vue"
import novel01 from "../component/novel/novel01.vue"

export default new VueRouter({
	routes: [{
			path: '/bj',
			component: bj
		},{
			path: '/loadnext',
			component: loadnext
		},{
			path: '/register',
			component: register
		},{
			path: '/entry',
			component: entry
		},
		 {
			path: '/list',
			component: list
		},
		{
			path: '/classify',
			component: classify
		},{
			path: '/special',
			component: special
		},{
			path: '/search',
			component: search
		},{
			path: '/me',
			component: me
		},
		{
			path: '/shujia',
			component: shujia
		},{
			path: '/shezi',
			component: shezi
		},
		{
			path: '/novel',
			component: novel
		},{
			path: '/novel01',
			component: novel01
		},
		{
			path:'*',
			redirect:'/bj'
		}
	]
})