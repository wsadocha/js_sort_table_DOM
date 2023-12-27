document.addEventListener("click",function(e){"THEAD"===e.target.parentElement.parentElement.tagName&&// write code here
function(e){for(var r=document.querySelectorAll("thead tr th"),t=0;t<r.length;t++)r[t].innerText===e&&(u=t);for(var n=document.querySelector("table").tBodies[0],l=[],a=0;a<n.rows.length;a++)l.push(n.rows[a].cells[u].innerText);"Salary"===e||"Age"===e?l.sort(function(e,r){return+e.replace(/[$,]/ig,"")-+r.replace(/[$,]/ig,"")}):l.sort(function(e,r){return e.localeCompare(r)});var o=!0,i=!1,c=void 0;try{// SORT ROWS IN TABLE
for(var u,f,d=l[Symbol.iterator]();!(o=(f=d.next()).done);o=!0)for(var s=f.value,g=0;g<n.children.length;g++)if(s===n.rows[g].cells[u].innerHTML){var h=n.rows[g];n.append(h)}}catch(e){i=!0,c=e}finally{try{o||null==d.return||d.return()}finally{if(i)throw c}}}(e.target.innerText)});//# sourceMappingURL=index.2ce5b5ed.js.map

//# sourceMappingURL=index.2ce5b5ed.js.map
