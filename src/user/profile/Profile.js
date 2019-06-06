import React, {Component} from 'react';
import './Profile.css';
import {Button, Header, Icon, Image, Input, Segment, Breadcrumb} from 'semantic-ui-react'
import ReactPhoneInput from 'react-phone-input-2'
import {profileInfoUpdate, profilePasswordUpdate, profileImageUpdate} from "../../util/APIUtils";
import Alert from "react-s-alert";
import ImageUploader from 'react-images-upload';
import {NavLink} from "react-router-dom";

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
            note: 'тестовое примечание',
        };
        if(this.props.currentUser){
            this.state = {
                name: this.props.currentUser.name,
                imageUrl: this.props.currentUser.imageUrl,
                email: this.props.currentUser.email,
                surname: this.props.currentUser.surname,
                patrName: this.props.currentUser.patrName,
                phone: this.props.currentUser.phone,
                note: this.props.currentUser.note,
            };
        }

        this.onDrop = this.onDrop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
        this.handlePasswordInputsShow = this.handlePasswordInputsShow.bind(this);
        this.handleMainInformationSubmit = this.handleMainInformationSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnPhoneChange = this.handleOnPhoneChange.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
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
                    <Breadcrumb>
                        <Breadcrumb.Section as={NavLink} to={'/'} link>Главная страница</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron' />
                        <Breadcrumb.Section as={NavLink} to={'/profile'} link>Панель управления профилем</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right arrow' />
                        <Breadcrumb.Section active>Редактирование профиля</Breadcrumb.Section>
                    </Breadcrumb>
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

                        <div className='profile-helper-message'>
                            <label>
                                Максимальный объем 5 мб
                                <p>Допустимые форматы - jpg, jpeg</p>
                            </label>
                        </div>
                        <ImageUploader
                            buttonText='Загрузить фото'
                            onChange={this.handleImageUpload}
                            imgExtension={['.jpg', '.jpeg']}
                            maxFileSize={5242880}
                            withIcon={false}
                            withLabel={false}
                            label={'Максимальный объем 5 мб. Допустимые форматы - jpg, jpeg'}
                            singleImage={true}
                            withPreview={false}
                            name={'photo'}
                            fileSizeError={'размер файла первышает допустимые нормы'}
                            fileTypeError={'тип файла не соответствует допустимым нормам'}
                            buttonStyles={{fontWeight: 700, borderRadius: '.28571429rem', width: '100%', backgroundColor: '#4d7198', padding: '.78571429em 1.5em .78571429em', marginTop: '0px'}}
                            fileContainerStyle={{boxShadow: 'none', display: 'flex', flexDirection: 'column-reverse', paddingTop: '0px', marginTop: '0px'}}
                            errorStyle={{}}
                            labelStyle={{color: '#d4d4d5', fontSize: '12px', textAlign: 'center', marginTop: '6px'}}
                        />
                    </div>

                    <div className="profile-description">

                        <form onSubmit={this.handleMainInformationSubmit}>
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
                                <ReactPhoneInput
                                    defaultCountry='ru'
                                    preferredCountries={['ua','kz','cz']}
                                    regions={'europe'}
                                    disableDropdown={true}
                                    id='phone'
                                    name='phone'
                                    placeholder='+7(800)000-00-00'
                                    value={this.state.phone}
                                    onChange={this.handleOnPhoneChange}
                                    inputClass='profile-form-input'
                                    containerStyle={{width: '452.5px'}}
                                    countryCodeEditable={false}
                                />
                              </div>
                            <div className="profile-input">
                                <label className='input-form-label' form='note'>Примечание:</label>
                                <Input  transparent className='profile-form-input' type='text' id='note' name="note" placeholder="Примечание"
                                        value={this.state.note} onChange={this.handleInputChange}/>
                            </div>
                        <div className="profile-save-button">
                            <Button color="vk" content='Сохранить изменения' floated='right'/>
                        </div>
                        </form>

                    </div>


                </div>

                <div className="password-change" >
                    <form onSubmit={this.handlePasswordSubmit}>
                        <label className='input-form-label' form='password'>Старый пароль:</label>
                        <Input onChange={this.handlePasswordInputsShow} fluid className='password-input' icon='lock' iconPosition='left' transparent type='password' id='password_old' name="password_old" placeholder="**********" required/>
                        <div className="password-change-retype" >
                        <label className='input-form-label' form='password'>Новый пароль:</label>
                        <Input fluid className='password-input' icon='lock' iconPosition='left' transparent type='password' id='password' name="password" placeholder="**********" required/>
                        <label className='input-form-label' form='password'>Подтвердить новый пароль:</label>
                        <Input fluid className='password-input' icon='lock' iconPosition='left' transparent type='password' id='password_two' name="password_two" placeholder="**********" required/>
                          </div>
                        <div className="password-update-button">
                            <Button floated='right' color="vk" content='Изменить пароль'/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }


    handleMainInformationSubmit(event) {
        event.preventDefault();

        const mainInfoRequest = Object.assign({}, {'name': this.state.name, 'email': this.state.email, 'surname': this.state.surname, 'patrName': this.state.patrName, 'phone': this.state.phone, 'note': this.state.note });

        profileInfoUpdate(mainInfoRequest)
            .then(response => {
                if (response.error) {
                    Alert.warning(response.error + '. Необходимо заново авторизоваться.');
                }else {
                    Alert.success('Данные успешно сохранены');
                }
            }).catch(error => {
            Alert.error('Что-то пошло не так! Попробуйте заново.' || (error && error.message));
        });
    }

    handlePasswordSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const passData = data.get('password');
        const passData_two = data.get('password_two');
        const passData_old = data.get('password_old');
        if (passData !== passData_two){
            Alert.warning('Пароли должны совпадать.');
            return
        }
        const passDataRequest = Object.assign({}, {'password': passData, 'passwordVerifier': passData_two, 'passwordMain': passData_old });
        profilePasswordUpdate(passDataRequest)
            .then(response => {
                if (response.error) {
                    Alert.warning(response.error + '. Необходимо заново авторизоваться.');
                }else if (response.success === false) {
                    Alert.warning(response.message);
                } else {
                    Alert.success('Данные успешно сохранены');
                }
            }).catch(error => {
            Alert.error('Что-то пошло не так! Попробуйте заново.' || (error && error.message));
        });
    }

    handlePasswordInputsShow(event) {
        event.preventDefault();
        let elements = document.getElementsByClassName('password-change-retype');
        if(elements) {
            for (let item of elements) {
                if (item) {
                    item.style.display = 'inherit';
                }
            }
        }
    }

    handleImageUpload() {
        let element = document.getElementsByClassName('errorMessage');
        if(element){
        for (let item of element) {
            if (item) {
                item.style.animation = 'cssAnimation 6s forwards';
                item.style.webkitAnimation = 'cssAnimation 6s forwards';
                setTimeout(function() {
                    item.style.display = 'none';
                }, 6000);
            }
        }
        }


        let photo = document.getElementsByName('photo');
        if(photo){
            for (let item of photo) {
                if (item) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        this.setState({
                            imageUrl: reader.result
                        })
                    };
                    reader.readAsDataURL(item.files[0]);
                    this.setState({
                        imageUrl :reader.result
                    });

                    const imageData = item.files[0];
                    const formData = new FormData();
                    formData.append('file', imageData);

                    profileImageUpdate(formData)
                        .then(response => {
                            if (response.error) {
                                Alert.warning(response.error + '. Необходимо заново авторизоваться');
                            }else if (response.success === false) {
                                Alert.warning(response.message);
                            } else {
                                Alert.success('Данные успешно сохранены');
                            }
                        }).catch(error => {
                        Alert.error('Что-то пошло не так! Попробуйте заново.' || (error && error.message));
                    });

                }else {
                    this.setState({
                        imageUrl: ""
                    })
                }
            }
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data)
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }

    handleOnPhoneChange(value) {
        this.setState({
            phone: value
        });
    }


    onDrop(picture) {
        this.setState({
            photo: this.state.photo.concat(picture),
        });
    }
}

export default Profile