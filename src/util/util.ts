export const divDate = (date: string)=>{
    const hour = Number(date.substr(8, 2));
    const yyyy = date.substr(0, 4);
    const MM = date.substr(4, 2);
    const dd = date.substr(6, 2);
    const HH = hour > 12 ? (hour - 12) + '' : hour + '';
    const mm = date.substr(10, 2);
    const ampm = hour > 12 ? 'PM' : 'AM';
    return {yyyy, MM, dd, HH, mm, ampm};
}