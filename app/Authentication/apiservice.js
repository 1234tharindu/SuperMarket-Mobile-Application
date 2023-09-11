/* eslint-disable prettier/prettier */
import React from 'react';
import {Auth} from './setup';
import App from '../Root';

export const SignUpUser = (email,password)=>{
    return new Promise (function(resolve,reject){
        Auth().createUserWithEmailAndPassword(email,password)
        .then(snapshot=>{
            resolve('Sign Up Successfuly ')
        }).catch(error=>{
            reject(error);
        });
    });
};

export const SignInUser = (email,password,navigation)=>{
    return new Promise (function(resolve,reject){
        Auth().signInWithEmailAndPassword(email,password)
        .then(snapshot=>{
            resolve('Sign in Successfuly ');
        }).catch(error=>{
            reject(error);
        });
    });
};