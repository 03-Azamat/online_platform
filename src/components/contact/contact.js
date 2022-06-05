import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProps} from "../../redux/action/corsesAction";

const Contact = () => {
    const {props: el } = useSelector(s => s)
    const dispatch = useDispatch()

    console.log(el, "PROPD")

    useEffect(()=>{
        dispatch(getProps())
    },[])

    return (
        <section className="py-20 bg-[#E5E5E5]">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    {
                        el.map(props =>(
                            <div className="rounded w-6/12 bg-gray-300 " key={props.id}>
                                <table className="table-auto w-full">
                                    <thead className="w-full">
                                    <tr>
                                        <th className="px-6 py-3 text-xl">Банковские реквизиты</th>
                                    </tr>
                                    </thead>
                                    <tbody className="w-full font-mono  font-medium text-lg">
                                    <tr>
                                        <td className="px-6 py-3">ИИН/КПП получателя</td>
                                        <td className="px-6 py-3">{props.iin}</td>

                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3">Банк получителя:</td>
                                        <td className="px-6 py-3">{props.address}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3">Расчетный счет</td>
                                        <td className="px-6 py-3">{props.info}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3">БИИК</td>
                                        <td className="px-6 py-3">{props.big}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3">Корреспондетский счеть</td>
                                        <td className="px-6 py-3">{props.okpo}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Contact;