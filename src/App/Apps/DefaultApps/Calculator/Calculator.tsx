/* eslint-disable no-eval */
import React, { useState } from 'react';
import style from "./Calculator.module.css";


function Calculator() {
    const [value, setValue] = useState('');

    function tryGetResult(val: string) {
        try {
            setValue(eval(val))
        } catch (e) {
            setValue('Ошибка')
        }
    }

    return (
        <div className={style.container}>
            <div className={style.calculator}>
                <form action="#" className={style.form}>
                    <div className={style.display}>
                        <input type="text" value={value} onChange={() => console.log('change')} />
                    </div>
                    <div>
                        <input type="button" value="AC" onClick={(e: any) => setValue('')} />
                        <input type="button" value="DE" onClick={(e: any) => setValue(value.slice(0, -1))} />
                        <input type="button" value="." onClick={(e: any) => setValue(value + e.target.value)} />
                        <input type="button" value="/" onClick={(e: any) => setValue(value + e.target.value)} />
                    </div>
                    <div>
                        <input type="button" value="7" onClick={(e: any) => setValue(value + e.target.value)} />
                        <input type="button" value="8" onClick={(e: any) => setValue(value + e.target.value)} />
                        <input type="button" value="9" onClick={(e: any) => setValue(value + e.target.value)} />
                        <input type="button" value="*" onClick={(e: any) => setValue(value + e.target.value)} />
                    </div>
                    <div>
                        <input type="button" value="4" onClick={(e: any) => setValue(value + e.target.value)} />
                        <input type="button" value="5" onClick={(e: any) => setValue(value + e.target.value)} />
                        <input type="button" value="6" onClick={(e: any) => setValue(value + e.target.value)} />
                        <input type="button" value="+" onClick={(e: any) => setValue(value + e.target.value)} />
                    </div>
                    <div>
                        <input type="button" value="1" onClick={(e: any) => setValue(value + e.target.value)} />
                        <input type="button" value="2" onClick={(e: any) => setValue(value + e.target.value)} />
                        <input type="button" value="3" onClick={(e: any) => setValue(value + e.target.value)} />
                        <input type="button" value="-" onClick={(e: any) => setValue(value + e.target.value)} />
                    </div>
                    <div>
                        <input type="button" value="00" onClick={(e: any) => setValue(value + e.target.value)} />
                        <input type="button" value="0" onClick={(e: any) => setValue(value + e.target.value)} />
                        <input type="button" value="=" className={style.equal} onClick={e => tryGetResult(value)} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Calculator;