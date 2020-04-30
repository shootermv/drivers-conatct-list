export const formatPhone = num => {
    if (!num) return;
    num = num.replace(/\.|\s+/g, '-')
    if (num.split('-').length === 3) {
        return num;
    }
    num = num.replace(/-/g,'');
    return `${num.slice(0,3)}-${num.slice(3,6)}-${num.slice(6)}`;
}