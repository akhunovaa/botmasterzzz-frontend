import React, { Component } from 'react';
import './Profile.css';
import '../../styles/style.css';

class Profile extends Component {
    render() {
        return (
            <section>
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            {
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                            <h2>{this.props.currentUser.name}</h2>
                            <p className="profile-email">{this.props.currentUser.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}

export default Profile