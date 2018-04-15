import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: #76b852; /* fallback for old browsers */
    background: -webkit-linear-gradient(right, #0969ad, #8DC26F);
    background: -moz-linear-gradient(right, #0969ad, #8DC26F);
    background: -o-linear-gradient(right, #0969ad, #8DC26F);
    background: linear-gradient(to left, #0969ad, #8DC26F);
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;   
    font-size : 14px;   
    color: #8c8b8b;
    }
    p,
    label {
      line-height: 1.5em;
    }
    .pull-left{
      float : left;
    }
    .pull-right{
      float : right;
    }
    .clearfix{
      clear : both;
    }
    ul{
      padding : 0px;
    }
  
  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  /*
 * Container style
 */
.ps {
  overflow: hidden !important;
  overflow-anchor: none;
  -ms-overflow-style: none;
  touch-action: auto;
  -ms-touch-action: auto;
}

/*
 * Scrollbar rail styles
 */
.ps__rail-x {
  display: none;
  opacity: 0;
  transition: background-color .2s linear, opacity .2s linear;
  -webkit-transition: background-color .2s linear, opacity .2s linear;
  height: 15px;
  /* there must be 'bottom' or 'top' for ps__rail-x */
  bottom: 0px;
  /* please don't change 'position' */
  position: absolute;
}

.ps__rail-y {
  display: none;
  opacity: 0;
  transition: background-color .2s linear, opacity .2s linear;
  -webkit-transition: background-color .2s linear, opacity .2s linear;
  width: 15px;
  /* there must be 'right' or 'left' for ps__rail-y */
  right: 0;
  /* please don't change 'position' */
  position: absolute;
}

.ps--active-x > .ps__rail-x,
.ps--active-y > .ps__rail-y {
  display: block;
  background-color: transparent;
}

.ps:hover > .ps__rail-x,
.ps:hover > .ps__rail-y,
.ps--focus > .ps__rail-x,
.ps--focus > .ps__rail-y,
.ps--scrolling-x > .ps__rail-x,
.ps--scrolling-y > .ps__rail-y {
  opacity: 0.6;
}

.ps .ps__rail-x:hover,
.ps .ps__rail-y:hover,
.ps .ps__rail-x:focus,
.ps .ps__rail-y:focus,
.ps .ps__rail-x.ps--clicking,
.ps .ps__rail-y.ps--clicking {
  background-color: #eee;
  opacity: 0.9;
}

/*
 * Scrollbar thumb styles
 */
.ps__thumb-x {
  background-color: #aaa;
  border-radius: 6px;
  transition: background-color .2s linear, height .2s ease-in-out;
  -webkit-transition: background-color .2s linear, height .2s ease-in-out;
  height: 6px;
  /* there must be 'bottom' for ps__thumb-x */
  bottom: 2px;
  /* please don't change 'position' */
  position: absolute;
}

.ps__thumb-y {
  background-color: #aaa;
  border-radius: 6px;
  transition: background-color .2s linear, width .2s ease-in-out;
  -webkit-transition: background-color .2s linear, width .2s ease-in-out;
  width: 6px;
  /* there must be 'right' for ps__thumb-y */
  right: 2px;
  /* please don't change 'position' */
  position: absolute;
}

.ps__rail-x:hover > .ps__thumb-x,
.ps__rail-x:focus > .ps__thumb-x,
.ps__rail-x.ps--clicking .ps__thumb-x {
  background-color: #999;
  height: 11px;
}

.ps__rail-y:hover > .ps__thumb-y,
.ps__rail-y:focus > .ps__thumb-y,
.ps__rail-y.ps--clicking .ps__thumb-y {
  background-color: #999;
  width: 11px;
}

/* MS supports */
@supports (-ms-overflow-style: none) {
  .ps {
    overflow: auto !important;
  }
}

@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .ps {
    overflow: auto !important;
  }
}
  h4{
    margin : 0;
  }
  h1{
    color : #000;
  }
  a{
    cursor : pointer;
    color: #018dec;
    text-decoration : none;
    font-size : 0.8em;
  }

  #app {
    height: 100%;
    min-width: 100%;
  }

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.search-page{
  width: 640px;
  max-width: 640px;
  padding: 8% 0 0;
  margin: 0 auto;
}


.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  border-radius : 3px;
  text-align: center;
  /* box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); */
  &.search{
    max-width : 780px;
    .search-form{
      display: flex;
      margin-bottom : 40px;
    }
    input{
      margin: 0px;
    }
    button{
      width : 120px;
    }
  }
}
.error-text{
  color : red;
  font-size : 12px;
  margin : 0;
  margin-top : 10px;
}
.form input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 14px;
  &.left-corner{
    border-radius : 3px 0 0px 3px;
  }
}
.form button {
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  border: 0;
  padding: 10px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  &.right-corner{
    border-radius : 0 3px 3px 0;
  }
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}

.skelecon-screen {
  width : 414px;
  margin: 0 auto;
  border-radius: 3px;
}
.skelecon-screen header {
  padding: 1em;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(10, 10, 10, 0.12), 0 1px 2px rgba(10, 10, 10, 0.24);
  background-color: #fefefe;
}
.skelecon-screen [type='text'] {
  margin: 0;
}
.skelecon-screen .button {
  margin: 1em 0 0;
  background-color: tomato;
}
.skelecon-screen .button:hover {
  color: tomato;
  background-color: #fff;
  border: 1px solid tomato;
}

.user {
  list-style-type: none;
  margin: 3px 0 0;
  padding: 0px;
}

.waiting-on-data .img-wrapper {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(-90deg, #fefefe 0%, #e6e6e6 50%, #fefefe 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  border-radius: 50%;
}
@keyframes pulse {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
}
.waiting-on-data .img-wrapper img {
  opacity: 0;
}
.waiting-on-data .name,
.waiting-on-data .gender {
  height: 100%;
  width: 100%;
  background-image: linear-gradient(-90deg, #fefefe 0%, #e6e6e6 50%, #fefefe 100%);
  background-size: 400% 400%;
  animation: pulse 1.2s ease-in-out infinite;
  width: 95%;
  height: 20px;
  margin-top: 15px;
  border-radius: 3px;
}
@keyframes pulse {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
}
.ui-item {
  display: flex;
  width: 100%;
  margin-top: 1em;
  background-color: #fefefe;
  border-radius: 3px;
  border : 1px solid #f5f5f5;
  padding: 1em;
  align-items: center;
}
.ui-item .profile {
  flex: 0 0 20%;
}
.ui-item .profile .img-wrapper {
  position: relative;
  padding: 0 0 100%;
  height: 0;
}
.ui-item .profile .img-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.ui-item .profile img {
  border-radius: 50%;
  padding: .2em;
  background-color: #ff6347;
}
.ui-item .user-info {
  flex: 0 0 70%;
  margin-left: 1em;
  text-align: left;
  &.full{
    flex : 1;
    margin: 0.5em;
  }
  strong{
    min-width : 40px;
  }
}
.ui-item .user-info .name {
  position: relative;
  color: #8c8b8b;
  font-size: 1em;
  text-transform: capitalize;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
}
.ui-item .user-info .gender,
.ui-item .user-info .email,
.ui-item .user-info .phone {
  font-size: .9em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #8a8a8a;
}
.ui-item .user-info .gender {
  text-transform: uppercase;
}
.go-back{
  font-size : 14px;
  color: orange;
}
.modal-heading{
  padding: 10px;
  background: #000;
  font-weight : 700;
  color : #ffff;
}
.pull-right{
  float : right;
}
.space-between{
  display : flex;
  justify-content : space-between;
}
.margin-right-5{
  margin-right : 5px;
}
.close-button{
  display : inline-block;
  padding : 5px;
  cursor : pointer;
  color : #fff;
}
.pad20{
  padding : 10px 20px;
}
`;