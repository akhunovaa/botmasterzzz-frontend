import React, { Component } from 'react';
import '../../feedback/Feedback.css';
import './MainSetupForm.css';
import Private from '../../img/padlock-7-32.jpg';
import Public from '../../img/padlock-5-32.jpg';
import botm from '../../img/botmasterzzz.png';
import {TextArea, Button, Dropdown, Input, Image, Grid} from 'semantic-ui-react'
import {projectUpdate, projectmageUpdate} from "../../util/APIUtils";
import Alert from "react-s-alert";
import ImageUploader from 'react-images-upload';

class MainSetupForm  extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            description: '',
            type: '',
            secret: '',
            botAvatarUrl: props.project.imageUrl ? props.project.imageUrl  : botm,
            project: props.project,
            botType: props.project.isPrivate === true ? 'Приватный' : 'Публичный'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const friendOptions = [
            {
                key: 'Публичный',
                text: 'Публичный',
                value: 'Публичный',
                image: { avatar: true, src: Public },
            },
            {
                key: 'Приватный',
                text: 'Приватный',
                value: 'Приватный',
                image: { avatar: true, src: Private },
            }
        ];

        const Project = ({item}) => (
            <>
                {
                    <div className="main-form-container">
                        <form onSubmit={this.handleSubmit}>
                            <fieldset className="fieldsetx">
                                <legend className="legendmain">
                                    Основные настройки
                                </legend>
                                <Grid columns={2} textAlign="left">
                                    <Grid.Column>
                                        <ol className="olx">
                                            <li className="lix">
                                                <label className="labelx" form="name">Наименование бота</label>
                                                <Input className="inputx" type="text" id="name" name="name"
                                                       placeholder="BotMasterzzz project" defaultValue={item.name} required/>
                                            </li>
                                            <li className="lix">
                                                <label className="labelx" form="description">Описание</label>
                                                <TextArea className="text-area"
                                                          id="description" name="description" defaultValue={item.description} />
                                            </li>
                                            <li className="lix">
                                                <label className="labelx" form="type">Тип бота</label>
                                                <Dropdown onChange={this.handleDropdownChange} placeholder='Тип бота' fluid selection id="type" name="type" options={friendOptions} value={this.state.botType}/>
                                            </li>
                                            <li className="lix">
                                                <label className="labelx" form="secret">Кодовое слово</label>
                                                <Input  className="inputx" id="secret" name="secret" defaultValue={item.secret}/>
                                            </li>
                                            <Button color="vk" id="button" type="submit" className="setup-save">Сохранить</Button>
                                        </ol>
                                    </Grid.Column>
                                    <Grid.Column verticalAlign='middle'>
                                            <Image className="field-logo" src={this.state.botAvatarUrl} size='medium' floated='right' circular />

                                            <div className='tools-helper-message'>
                                                <label>
                                                    Максимальный объем 5 мб
                                                    <p>Допустимые форматы - jpg, jpeg</p>
                                                </label>
                                            </div>
                                            <ImageUploader
                                                buttonText='Загрузить аватар'
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
                                                buttonStyles={{fontWeight: 700, borderRadius: '.28571429rem', backgroundColor: '#4d7198', padding: '.78571429em 1.5em .78571429em', marginTop: '0px'}}
                                                fileContainerStyle={{boxShadow: 'none', display: 'flex', flexDirection: 'column-reverse', paddingTop: '0px', marginTop: '0px'}}
                                                errorStyle={{}}
                                                labelStyle={{color: '#d4d4d5', fontSize: '12px', textAlign: 'center', marginTop: '6px'}}
                                            />
                                    </Grid.Column>
                                </Grid>

                            </fieldset>
                        </form>
                    </div>
                }
            </>
        );

        return (
            <Project item={this.state.project}/>
        );
}

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const name = data.get('name');
        const description = data.get('description');
        const secret = data.get('secret');
        const aPrivate = this.state.botType === 'Приватный';
        const projectDataRequest = Object.assign({}, {id: this.state.project.id, 'name' : name, 'description': description, 'secret': secret, 'isPrivate': aPrivate ? 'true' : 'false' });

        projectUpdate(projectDataRequest)
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


    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });
    }

    handleDropdownChange = (e, { value }) => this.setState({ botType: value });

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
                            botAvatarUrl: reader.result
                        })
                    };
                    reader.readAsDataURL(item.files[0]);
                    this.setState({
                        botAvatarUrl :reader.result
                    });

                    const imageData = item.files[0];
                    const formData = new FormData();
                    formData.append('file', imageData);
                    formData.append('projectId', this.state.project.id);

                    projectmageUpdate(formData)
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
}

export default MainSetupForm