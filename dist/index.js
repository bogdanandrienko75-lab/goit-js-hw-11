/* empty css                      */import{a as m,S as d,i as n}from"./assets/vendor-qRCtuz5G.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="55832000-3ddcf2f713b5877a9b0974dfc",y={key:h,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};async function b(i){return(await m.get(g,{params:{...y,q:i}})).data}const c=document.querySelector("#gallery"),l=document.querySelector(".loader"),L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function S(i){const o=i.map(({webformatURL:s,largeImageURL:r,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
        <li class="photo-card">
          <a class="photo-link" href="${r}">
            <img class="photo-image" src="${s}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes</b><span>${t}</span></p>
            <p><b>Views</b><span>${a}</span></p>
            <p><b>Comments</b><span>${u}</span></p>
            <p><b>Downloads</b><span>${f}</span></p>
          </div>
        </li>
      `).join("");c.innerHTML=o,L.refresh()}function v(){c.innerHTML=""}function P(){l.classList.add("is-visible")}function $(){l.classList.remove("is-visible")}const p=document.querySelector("#search-form");p.addEventListener("submit",w);function w(i){i.preventDefault();const s=new FormData(p).get("search-text").trim();if(!s){n.warning({title:"Warning",message:"Please enter a search term.",position:"topRight"});return}v(),P(),b(s).then(r=>{if(!r||!Array.isArray(r.hits)||r.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(r.hits),n.success({title:"Success",message:`Found ${r.hits.length} images for "${s}".`,position:"topRight"})}).catch(r=>{console.error(r),n.error({title:"Error",message:"Unable to load images. Please try again later.",position:"topRight"})}).finally(()=>{$()})}
//# sourceMappingURL=index.js.map
