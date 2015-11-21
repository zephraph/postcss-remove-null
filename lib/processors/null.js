export default function nullVal(decl) {

    if (decl.value === 'null') {
        decl.remove();
    }

}
