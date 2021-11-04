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

