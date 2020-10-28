
const removeJustify=(type)=>{
    const boxes = document.getElementById('boxes');
    boxes.classList.remove("jstart");
    boxes.classList.remove("jend");
    boxes.classList.remove("jcenter");
    boxes.classList.remove("jspacearound");
    boxes.classList.remove("jspace");
    boxes.classList.remove("jspaceven");
    
}
const removeAlign=()=>{
    const boxes = document.getElementById('boxes');
    boxes.classList.remove("astart");
    boxes.classList.remove("aend");
    boxes.classList.remove("acenter");
    boxes.classList.remove("aspaceB");
    boxes.classList.remove("aspaceA");
    boxes.classList.remove("aspaceE");
}
const removeDirection=()=>{
    const boxes = document.getElementById('boxes');
    boxes.classList.remove("row");
    boxes.classList.remove("row-reverse");
    boxes.classList.remove("column");
    boxes.classList.remove("column-reverse")
}

const removeSelected=(num)=>{
    const justify = document.getElementsByClassName('justify');
    for(let i=0;i<justify.length;i++){
        justify[i].classList.remove('selected');
    }
    justify[num].classList.add('selected');
}

const removeSelectedA=(num)=>{
    const align = document.getElementsByClassName('align');
    for (let i = 0; i < align.length; i++) {
        align[i].classList.remove('selected');
    }
    align[num].classList.add('selected');
}
const removeSelectedD=(num)=>{
    const dir = document.getElementsByClassName('dir');
    for (let i = 0; i < dir.length; i++) {
        dir[i].classList.remove('selected');
    }
    dir[num].classList.add('selected');
}
const center=(e)=>{
    const boxes = document.getElementById('boxes');
    console.log(e);
    removeJustify();
    removeSelected(1);
    boxes.classList.add("boxes");
    boxes.classList.add("jcenter");
    //removal
    
}

const start = () => {
    const boxes = document.getElementById('boxes');
    // boxes.classList = '';
    removeJustify();
    removeSelected(0);
    // boxes.classList.add('selected');
    boxes.classList.add("boxes");
    boxes.classList.add("jstart");
}
const end = () => {
    const boxes = document.getElementById('boxes');
    removeJustify();
    removeSelected(2);
    boxes.classList.add("boxes");
    boxes.classList.add("jend");
}
const spaceB = () => {
    const boxes = document.getElementById('boxes');
    removeJustify();
    removeSelected(3);
    boxes.classList.add("boxes");
    boxes.classList.add("jspace");
}
const spaceE = () => {
    const boxes = document.getElementById('boxes');
    removeJustify();
    removeSelected(4);
    boxes.classList.add("boxes");
    boxes.classList.add("jspaceven");
}
const spaceA = () => {
    const boxes = document.getElementById('boxes');
    removeJustify();
    removeSelected(5);
    boxes.classList.add("boxes");
    boxes.classList.add("jspacearound");
}

const alignStart=()=>{
    const boxes = document.getElementById('boxes');
    removeAlign();
    removeSelectedA(0);
    boxes.classList.add("boxes");
    boxes.classList.add("astart");
}
const alignEnd = () => {
    const boxes = document.getElementById('boxes');
    removeSelectedA(2);
    removeAlign();
    boxes.classList.add("boxes");
    boxes.classList.add("aend");
}
const alignCenter = () => {
    const boxes = document.getElementById('boxes');
    removeSelectedA(1);
    removeAlign();
    boxes.classList.add("boxes");
    boxes.classList.add("acenter");
}
const alignSpaceBetween = () => {
    const boxes = document.getElementById('boxes');
    removeAlign();
    boxes.classList.add("boxes");
    boxes.classList.add("aspaceB");
}
const alignSpaceAround = () => {
    const boxes = document.getElementById('boxes');
    removeAlign();
    boxes.classList.add("boxes");
    boxes.classList.add("aspaceA");
}
const alignSpaceEvenly = () => {
    const boxes = document.getElementById('boxes');
    removeAlign();
    boxes.classList.add("boxes");
    boxes.classList.add("aspaceE");
}
const row=()=>{
    const boxes = document.getElementById('boxes');
    removeDirection();
    removeSelectedD(0);
    boxes.classList.add("row")
}
const row_reverse = () => {
    const boxes = document.getElementById('boxes');
    removeDirection();
    removeSelectedD(1);
    boxes.classList.add("row-reverse")
}
const column = () => {
    const boxes = document.getElementById('boxes');
    removeDirection();
    removeSelectedD(2);
    boxes.classList.add("column")
}
const column_reverse = () => {
    const boxes = document.getElementById('boxes');
    removeDirection();
    removeSelectedD(3);
    boxes.classList.add("column-reverse")
}