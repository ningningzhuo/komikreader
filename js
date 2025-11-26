let currentChap = 1;
const maxChap = 24; // ganti kalau nambah chapter

function loadChapter(num){
    const container = document.getElementById('container');
    container.innerHTML = '';
    document.getElementById('title').innerText = 'Chapter ' + num;

    fetch(`chapters/chap${num}/list.txt`).then(r=>r.text()).then(t=>{
        const files = t.trim().split('\n');
        files.forEach(name=>{
            const img = document.createElement('img');
            img.src = `chapters/chap${num}/` + name;
            container.appendChild(img);
        });
    });
}

function prevChap(){
    if(currentChap > 1){
        currentChap--;
        loadChapter(currentChap);
    }
}

function nextChap(){
    if(currentChap < maxChap){
        currentChap++;
        loadChapter(currentChap);
    }
}

loadChapter(currentChap);
