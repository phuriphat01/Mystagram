function addImage(kesyword,index){
    const imgElement = document.createElement('img');
    imgElement.src=`https://source.unsplash.com/400x225?${kesyword}&sig=${index}`;

    const gallery = document.querySelector(".gallery");
    gallery.appendChild(imgElement);
}


function main()
{
    addImage("the witcher,1");
}
{
    addImage("Stranger things,2");
}
{
    addImage("Riverdale,3");
}
{
    addImage("Sea,4");
}
{
    addImage("mountain,5");
}
{
    addImage("Aurora,6");
}
{
    addImage("cute,7");
}
{
    addImage("Coulorful,8");
}
{
    addImage("view,9");
}
main();
