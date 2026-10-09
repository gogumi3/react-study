import React, { useRef, useState } from 'react'
import '../Style03.css'

const data = [
    { id: 1, name: '삼성 세탁기', price: 2500000 },
    { id: 2, name: '엘지 냉장고', price: 3500000 },
    { id: 3, name: '삼성 스타일러', price: 150000 },
]

const initForm = {
    name: '엘지 TV',
    price: 2000000
};

const RegisterPage = () => {

    const [products, setProducts] = useState(data);
    const [form, setForm] = useState(initForm);

    const { name, price } = form;

    // 다음 상품 id 저장
    const idRef = useRef(4);

    // 상품 이름 input에 접근하기 위한 ref
    const nameRef = useRef();

    // 입력상자 내용이 바뀔 때
    const onChangeForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    // 상품 등록
    const onRegister = (e) => {
        e.preventDefault();

        if (name === '' || price === '') {
            alert('상품명이나 상품가격을 입력하세요.');
        } else {
            setProducts(products.concat({...form,id: idRef.current++}));
            setForm({name:'', price:''});
            nameRef.current.focus();
        }
    }

    // 입력상자 초기화
    const onReset = (e) => {
        e.preventDefault();
        if(form !== initForm) {
            if(window.confirm('찐?')){
                setForm(initForm);
            }
        }
    }

    // 상품 삭제
    const onDelete = (id) => {
        if(window.confirm('${id}번 상품을 삭제?')) {
            setProducts(products.filter(p=>p.id !== id));
        }
    }

    return (
        <div className='box'>

            <h1>상품등록</h1>

            <form
                onSubmit={onRegister}
                onReset={onReset}
            >

                <input
                    ref={nameRef}
                    onChange={onChangeForm}
                    value={name}
                    placeholder='상품이름'
                    name='name'
                />

                <input
                    onChange={onChangeForm}
                    value={price}
                    placeholder='상품가격'
                    name='price'
                    type='number'
                    step={1000}
                />

                <div>
                    <button type='submit'>등록</button>
                    <button type='reset'>취소</button>
                </div>

            </form>

            <h1 style={{ marginTop: '30px' }}>
                상품목록
            </h1>

            <table>
                <tbody>

                    {products.map(p =>
                        <tr key={p.id}
                            onContextMenu={(e) => {
                                e.preventDefault();
                                onDelete(p.id);
                            }}
                        >
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    )
}

export default RegisterPage