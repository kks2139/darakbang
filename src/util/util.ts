export const divDate = (date: string)=>{
    const hour = Number(date.substr(8, 2));
    const yyyy = date.substr(0, 4);
    const yy = date.substr(2, 2);
    const MM = date.substr(4, 2);
    const dd = date.substr(6, 2);
    const HH = hour > 12 ? (hour - 12) + '' : hour + '';
    const mm = date.substr(10, 2);
    const ampm = hour > 12 ? 'PM' : 'AM';
    return {yyyy, yy, MM, dd, HH, mm, ampm};
}

export const validate = (root: HTMLElement)=>{
    let result = true;
    const els = root.querySelectorAll('[data-redbox]');

    els.forEach(el => {
        const cls = el.classList;
        const inputs = el.querySelectorAll('input');
        const textareas = el.querySelectorAll('textarea');
        const comboboxes = el.querySelectorAll('[data-combo]');

        if(inputs.length > 0){
            let validCount = 0;
            inputs.forEach(input => {
                if(input.value.trim()) validCount++;
            });
            if(validCount === inputs.length){
                cls.remove('invalid');
            }else{
                cls.add('invalid');
                result = false;
            }
        }
        if(textareas.length > 0){
            let validCount = 0;
            textareas.forEach(textarea => {
                if(textarea.value.trim()) validCount++;
            });
            if(validCount === textareas.length){
                cls.remove('invalid');
            }else{
                cls.add('invalid');
                result = false;
            }
        }
        if(comboboxes.length > 0){
            let validCount = 0;
            comboboxes.forEach(combobox => {
                if(combobox.querySelector('.value')) validCount++;
            });
            if(validCount === comboboxes.length){
                cls.remove('invalid');
            }else{
                cls.add('invalid');
                result = false;
            }
        }
    });
    return result;
}

export const clearInvalid = (root: HTMLElement)=>{
    const els = root.querySelectorAll('.invalid');
    els.forEach(el => {
        el.classList.remove('invalid');
    });
}

export const request = async (req: string, option?: object)=>{
    let api = '';
    const opt = {
        method: 'post',
        body: JSON.stringify(option)
    };

    switch(req){
        case 'getNotifications':
            api = '요청 url';
            break;
        case 'refreshMessage':
            api = '요청 url';
            break;
        default:
            break;
    }   
    try{
        const res = await fetch(api, opt);
        if(res.status !== 200) {
            alert('데이터 조회중 문제가 발생하였습니다.');
        }else{
            return res.json();
        }
    }catch(e){
        console.error(`Error : ${e}`);
        alert('문제가 발생하였습니다');
    }
}

