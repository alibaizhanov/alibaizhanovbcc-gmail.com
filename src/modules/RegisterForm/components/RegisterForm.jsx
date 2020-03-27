import React from 'react';
import {Form,Input,Icon} from 'antd'
import {Link} from 'react-router-dom'

import {Button,Block} from 'components'
const success = false;
const RegisterForm = props=>{

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

    return (
        <div>
            <div className='auth__top'>
                <h2>Регистрация</h2>
                <p>
                    Для входа в чат, вам нужно зарегистрироваться 
                </p>
            </div>
            <Block>
            {!success?(<Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item hasFeedback 
                        validateStatus={!touched.email ? '': errors.email ? 'error':'success'}
                        help = {!touched.email ? '': errors.email }>
                        <Input
                        id="email"
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        size = 'large'
                        placeholder="E-Mail"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        />

                    </Form.Item>
                    <Form.Item>
                    
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        size = 'large'
                        type="user"
                        placeholder="Ваше имя"
                        />

                    </Form.Item>
                    <Form.Item
                         hasFeedback
                         validateStatus={!touched.password ? '': errors.password ? 'error':'success'}
                         help = {!touched.password ? '': errors.password }>
                        <Input
                        id='password'
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        size = 'large'
                        type="password"
                        placeholder="Пароль"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />

                    </Form.Item>
                    <Form.Item>
                    
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        size = 'large'
                        type="password"
                        placeholder="Повторите пароль"
                        />

                    </Form.Item>
                    <Form.Item>
                        
                    <Button onClick = {handleSubmit} type="primary" size = 'large'>
                         Зарегистрироваться
                    </Button>
                    </Form.Item>
                    <Link className ="auth__register-link" to ="/login">
                         Войти в аккаунт
                    </Link>
            </Form>):(<div className='auth__success-block'>
                      <div>
                          <Icon type = 'info-circle' theme = 'twoTone'/>
                      </div>
                        <h2>Потвердите свой аккаунт</h2>
                        <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                      </div>)}
            </Block>
        </div>
    );
}

export default RegisterForm;
