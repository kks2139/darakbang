export const divDate = (date: string)=>{
    const hour = Number(date.substr(8, 2));
    const yyyy = Number(date.substr(0, 4));
    const yy = Number(date.substr(2, 2));
    const MM = Number(date.substr(4, 2));
    const dd = Number(date.substr(6, 2));
    const HH = hour > 12 ? (hour - 12) : hour;
    const mm = Number(date.substr(10, 2));
    const ss = Number(date.substr(12, 2));
    const ampm = hour > 12 ? 'PM' : 'AM';
    return {yyyy, yy, MM, dd, HH, mm, ss, ampm};
}

export const validateInputs = (rootElement: HTMLElement)=>{
    let valid = true;
    let invalidCount = 0;
    const requiredNodes = rootElement.querySelectorAll('[data-required]');

    requiredNodes.forEach(node => {
        if(node instanceof HTMLInputElement || node instanceof HTMLTextAreaElement){
            if(!node.value.trim()){
                invalidCount++;
                node.classList.add('invalid');
            }else{
                node.classList.remove('invalid');
            }
        }
    });
    valid = invalidCount == 0;
    
    return valid;
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
    if(root.classList.contains('invalid')){
        root.classList.remove('invalid');
    }
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

interface ObserverParams {
    root: HTMLElement | null 
    dom: HTMLElement | HTMLElement[]
    threshold?: number
    intersectionCallback: (target: Element, isIntersecting: boolean, rect: DOMRectReadOnly)=> void
}

export const setIntersectionObserver = ({root, dom, threshold=0, intersectionCallback}: ObserverParams)=>{
    const elements = Array.isArray(dom) ? dom : [dom];

    const callback: IntersectionObserverCallback = (entries, observer)=> {
        entries.forEach(entry => {
            const {target, isIntersecting, boundingClientRect} = entry;
            intersectionCallback(target, isIntersecting, boundingClientRect);
        });
    }
    const option = {
        root,
        rootMargin: '0px',
        threshold,
    };
    const observer = new IntersectionObserver(callback, option);

    elements.forEach(el => {
        observer.observe(el);
    });
}