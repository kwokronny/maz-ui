import{d as h,c as p,a as s,A as d,z as e,b as l,a3 as t,W as k,o as r}from"./chunks/framework.0IHa-SMz.js";const o={id:"frontmatter-title",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),g=t('<div class="info custom-block"><p class="custom-block-title">INFO</p><p>Before you have to import the global css files in your project, follow instructions in <a href="./../guide/getting-started">Getting Started</a></p></div><h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic usage&quot;">​</a></h2>',2),E=t(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">MazGallery</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">images</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">images</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">320</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MazGallery, { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MazGalleryImage } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;maz-ui/components/MazGallery&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> images</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MazGalleryImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;https://placekitten.com/640/500&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://placekitten.com/640/600&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, thumbnail: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://placekitten.com/100/100&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, alt: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;image description&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://placekitten.com/640/700&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, alt: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;image description&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;https://placekitten.com/640/800&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;https://placekitten.com/640/1000&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;https://placekitten.com/800/800&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="set-height-by-css" tabindex="-1">Set height by CSS <a class="header-anchor" href="#set-height-by-css" aria-label="Permalink to &quot;Set height by CSS&quot;">​</a></h2>`,2),y=t(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">MazGallery</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  :images</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;images&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;maz-h-48 mob-l:maz-h-60 tab-s:maz-h-80&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  no-height</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-label="Permalink to &quot;Types&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MazGalleryImage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      thumbnail</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">      alt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span></code></pre></div><h2 id="component-informations" tabindex="-1">Component informations <a class="header-anchor" href="#component-informations" aria-label="Permalink to &quot;Component informations&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td>images</td><td>Array of string or object: <code>[&#39;https://via.placeholder.com/500&#39;, &#39;https://via.placeholder.com/600&#39;]</code> or <code>[{ slug: &#39;https://via.placeholder.com/500&#39;, alt: &#39;image descripton&#39; }, { slug: &#39;https://via.placeholder.com/600&#39;, alt: &#39;image descripton&#39; }]</code></td><td>MazGalleryImage[]</td><td>-</td><td>() =&gt; []</td></tr><tr><td>imagesShownCount</td><td>Images count shown (max: 5)</td><td>number</td><td>-</td><td>5</td></tr><tr><td>noRemaining</td><td>Remove transparent layer with the remain count (ex: +2)</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>height</td><td>Height of gallery</td><td>number|string</td><td>-</td><td>150</td></tr><tr><td>noHeight</td><td>Remove default height - useful to set height with css</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>width</td><td>Width of gallery</td><td>number|string</td><td>-</td><td>&#39;100%&#39;</td></tr><tr><td>noWidth</td><td>Remove default width</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>noRadius</td><td>Disable the border radius of the gallery</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>noZoom</td><td>Disable full size display when clicking on image</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>hasEmptyLayer</td><td>Layer with photography icon when no images is provided</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>lazy</td><td>Lazy load image - if false, images are directly loaded</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>blur</td><td>Disable blur effect on image hover</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>scale</td><td>Disable scale animation effect on image hover</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>separatorColor</td><td>Choose color of borders between images - Should be a CSS color or CSS variable - Ex: <code>#000</code> or <code>var(--maz-color-bg-light)</code></td><td>string</td><td>-</td><td>&#39;transparent&#39;</td></tr></tbody></table>`,6),C=JSON.parse('{"title":"MazGallery","description":"MazGallery is a standalone component used to display images in a container and has many options and actions","frontmatter":{"title":"MazGallery","description":"MazGallery is a standalone component used to display images in a container and has many options and actions"},"headers":[],"relativePath":"components/maz-gallery.md","filePath":"components/maz-gallery.md","lastUpdated":1705482613000}'),m={name:"components/maz-gallery.md"},f=h({...m,setup(F){const i=["https://placekitten.com/640/500",{src:"https://placekitten.com/640/600",thumbnail:"https://placekitten.com/100/100",alt:"image description"},{src:"https://placekitten.com/640/700",alt:"image description"},"https://placekitten.com/640/800","https://placekitten.com/640/1000","https://placekitten.com/800/800"];return(a,u)=>{const n=k("MazGallery",!0);return r(),p("div",null,[s("h1",o,[d(e(a.$frontmatter.title)+" ",1),c]),s("p",null,e(a.$frontmatter.description),1),g,l(n,{images:i,height:320}),E,l(n,{images:i,class:"maz-h-48 mob-l:maz-h-60 tab-s:maz-h-80","no-height":""}),y])}}});export{C as __pageData,f as default};
