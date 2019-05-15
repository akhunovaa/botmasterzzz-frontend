import React, {Component} from 'react';
import './Profile.css';
import {Button, Header, Icon, Image, Input, Segment} from 'semantic-ui-react'

class Profile extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: 'test_name',
            imageUrl: '',
            email: 'secondary_test_email@botmasterzzz.com',
            surname: 'test_surname',
            patrName: 'test_patr_name',
            phone: '+7917286063082',
            password: 'test_password'
        };
        if(this.props.currentUser){
            this.state = {
                name: this.props.currentUser.name,
                imageUrl: this.props.currentUser.imageUrl,
                email: this.props.currentUser.email,
                surname: this.props.currentUser.surname,
                patrName: this.props.currentUser.patrName,
                phone: this.props.currentUser.phone,
                password: this.props.currentUser.password
            };
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    render() {
        return (
            <div className="profile-container">
                <div className="profile-header">
                    <Segment vertical>
                        <Header floated='left'>
                            <Icon name='user'/>
                            <Header.Content>
                                Профиль
                                <Header.Subheader>Панель управления профилем</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Segment>
                </div>

                <div className="profile-info">

                    <div className="profile-avatar">
                        {
                            this.state.imageUrl ? (

                                <Image src={this.state.imageUrl} size='medium' circular verticalAlign='top' alt={this.state.name}/>
                            ) : (
                                <div className="text-avatar">
                                    <span>{this.state.name && this.state.name[0]}</span>
                                </div>
                            )
                        }
                        <Button className='avatar-loader-button' fluid color='vk' content="Загрузить фото"
                                onClick={this.handleCancel}/>
                    </div>

                    <div className="profile-description">

                        <form onSubmit={this.handleSubmit}>
                        <div className="profile-input">
                            <label className='input-form-label' form='name'>Имя:</label>
                            <Input  transparent className='profile-form-input' type='text' id='name' name="name" placeholder="Имя"
                                    value={this.state.name} onChange={this.handleInputChange}/>
                        </div>
                        <div className="profile-input">
                            <label className='input-form-label' form='surname'>Фамилия:</label>
                            <Input transparent className='profile-form-input' type='text' id='surname' name="surname" placeholder="Фамилия"
                                   value={this.state.surname} onChange={this.handleInputChange}/>
                        </div>
                        <div className="profile-input">
                            <label className='input-form-label' form='patrname'>Отчество:</label>
                            <Input  transparent className='profile-form-input' type='text' id='patrname' name="patrName" placeholder="Отчество"
                                    value={this.state.patrName} onChange={this.handleInputChange}/>
                        </div>
                        <div className="profile-input">
                            <label className='input-form-label' form='email'>E-mail:</label>
                            <Input transparent className='profile-form-input' type='text' id='email' name="email" placeholder="E-mail"
                                   value={this.state.email} onChange={this.handleInputChange}/>
                        </div>
                        <div className="profile-input">
                            <label className='input-form-label' form='phone'>Номер телефона:</label>
                            <Input transparent className='profile-form-input' type='tel' id='phone' name="phone" placeholder="+78000000000"
                                   value={this.state.phone} onChange={this.handleInputChange} pattern="(\+?\d[- .]*){7,13}"
                                   title="Международный, государственный или местный телефонный номер"/>
                        </div>

                        <div className="profile-save-button">
                            <Button color="vk" content='Сохранить изменения' floated='right'/>
                        </div>
                        </form>

                    </div>


                </div>


                    <form className="password-change" onSubmit={this.handleSubmit}>
                        <Input fluid className='password-input' icon='lock' iconPosition='left' transparent type='password' id='password' name="password" placeholder="**********"
                                value={this.state.password} onChange={this.handleInputChange} required/>

                        <div className="password-update-button">
                            <Button floated='right' color="vk" content='Изменить пароль' onClick={this.handleSubmit}/>
                        </div>
                    </form>

            </div>
        );
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log(event.action)
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }
}

export default Profile