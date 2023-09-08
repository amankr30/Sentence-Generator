const input=document.getElementById("input");
const tagsContainer=document.querySelector(".tags");

  const addWords = ()=>{
    const tag=document.createElement("div");
    tag.setAttribute("class","tag");
    

    tag.innerText=`Hey! I am ${input.value}`;

    tagsContainer.append(tag);

}

