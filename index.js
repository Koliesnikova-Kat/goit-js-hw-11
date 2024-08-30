import{S as d,i as n}from"./assets/vendor-B07T6_gy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="https://pixabay.com",m=t=>{const o=new URLSearchParams({q:t,key:"45695885-da8e33dec9e780ad4c69fe11f",orientation:"horizontal",safesearch:"true",per_page:30});return fetch(`${p}/api/?${o}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},f=t=>`
    <li class='gallery-item'>
      <a class='gallery-link' href='${t.largeImageURL}'>
        <img class='gallery-image' src='${t.webformatURL}' alt='${t.tags}' />
      </a>
      <div class='info'>
        <p class='info-item'>
          <b>Likes</b> ${t.likes}
        </p>
        <p class='info-item'>
          <b>Views</b> ${t.views}
        </p>
        <p class='info-item'>
          <b>Comments</b> ${t.comments}
        </p>
        <p class='info-item'>
          <b>Downloads</b> ${t.downloads}
        </p>
      </div>
    </li>
  `,l=document.querySelector("form"),y=document.querySelector("input"),c=document.querySelector(".loader"),u=document.querySelector(".gallery"),h=t=>{t.preventDefault();const o=y.value.trim();if(!o){n.error({message:"Please enter a search query!",position:"topRight"});return}c.classList.remove("is-hidden"),m(o).then(s=>{if(u.innerHTML="",s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.reset();return}const i=s.hits.map(f).join("");u.innerHTML=i,g.refresh()}).catch(s=>{n.error({message:`${s}`,position:"topRight"})}).finally(()=>{c.classList.add("is-hidden"),l.reset()})};let g=new d(".gallery li a",{captions:!0,captionsData:"alt",captionDelay:250,overlayOpacity:.8,captionsPosition:"bottom"});l.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
