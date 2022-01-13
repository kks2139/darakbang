import React, { useState, useCallback } from 'react';

interface RequestInfo<Param> {
    api: string
    method?: string
    params?: Param | null
}

type ResponseCallback<Response> = (data: Response)=> void

const apiMap = [
    {
        api: 'getTestData',
        url: 'https://api.mockaroo.com/api/654a6300?count=1000&key=9e0801a0'
    }
];

const useRequest = ()=> {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const sendRequest = useCallback(async <Param, Response>(requestInfo: RequestInfo<Param>, responseCallback: ResponseCallback<Response>)=>{
        const {api, method='GET', params=null} = requestInfo;
        const {url} = apiMap.find(map => map.api === api)!;
        try{
            setIsLoading(true);
            setError(null);
            const result = await fetch(url, {
                method,
                body: params ? JSON.stringify(params) : null
            });
    
            if(result.ok){
                const resultData = await result.json();
                responseCallback(resultData);
            }else{
                throw new Error('문제가 발생하였습니다.');
            }
        }catch(e){
            if(typeof e === 'string'){
                setError(e);
            }else{
                setError('문제가 발생하였습니다.');
            }
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useRequest;