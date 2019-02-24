(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(26)},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(12),c=a.n(r),o=a(2),l=a(3),i=a(5),m=a(4),d=a(6),p=a(29),u=a(28),h=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"header layout--center"},n.a.createElement("div",{className:"header__content layout--wrapped"},n.a.createElement("div",{className:"brand"},n.a.createElement("a",{href:"/"},n.a.createElement("div",{className:"brand__name"},n.a.createElement("span",null,"#"),"DEVRANT"))),n.a.createElement("div",{className:"join"},n.a.createElement("span",{onClick:this.props.showLogin},"Join"))))}}]),t}(s.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"loader",style:this.props.isLoading?{}:{display:"none"}},n.a.createElement("div",{className:"spinner"}))}}]),t}(s.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={isActive:a.props.show},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"popup "+(this.props.show?"popup--open":"")},n.a.createElement("div",{className:"popup__header"},n.a.createElement("div",{title:"Close",className:"close layout--center",onClick:this.props.close},"X")),n.a.createElement("div",{className:"popup__body layout--center"},n.a.createElement("div",{className:"popup__body-inner"},n.a.createElement("div",{className:"form"},n.a.createElement("div",{className:"form__title"},n.a.createElement("span",{className:"highlight"},"#"),this.props.title),n.a.createElement("div",{className:"form__description"},this.props.description),n.a.createElement("form",{name:"alert"},n.a.createElement("div",{className:"alert"},n.a.createElement("input",{type:"button",className:"btn",value:"OK",onClick:this.props.close})))))))}}]),t}(s.Component),f=a(13),_=function(e){var t=e.formErrors;return n.a.createElement("div",{className:"form__error"},Object.keys(t).map(function(e,a){return t[e].length>0?n.a.createElement("p",{key:a},e," ",t[e]):""}))},N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).submitForm=function(e){e.preventDefault(),this.validateField(this.usernameInput.name,this.usernameInput.value),this.validateField(this.passwordInput.name,this.passwordInput.value),this.state.formValid?alert("OK"):alert("no")},a.state={showLoader:!1,username:"",password:"",formErrors:{username:"",password:""},userValid:!1,passwordValid:!1,formValid:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleUserInput",value:function(e){var t=this,a=e.target.name,s=e.target.value;this.setState(Object(f.a)({},a,s),function(){t.validateField(a,s)})}},{key:"validateField",value:function(e,t){var a=this.state.formErrors,s=this.state.userValid,n=this.state.passwordValid;switch(e){case"username":s=""===t,a.username=s?" is required":"";break;case"password":n=""===t,a.password=n?" is required":""}this.setState({formErrors:a,userValid:s,passwordValid:n},this.validateForm),console.log(s,n)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.userValid&&this.state.passwordValid})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"popup "+(this.props.isOpen?"popup--open":"")},n.a.createElement("div",{className:"popup__header"},n.a.createElement("div",{title:"Close",className:"close layout--center",onClick:this.props.hideLogin},"X")),n.a.createElement("div",{className:"popup__body layout--center"},n.a.createElement("div",{className:"popup__body-inner"},n.a.createElement("div",{className:"form"},n.a.createElement("div",{className:"form__title"},"JOIN ",n.a.createElement("span",{className:"highlight"},"#"),"DEVRANT"),n.a.createElement("div",{className:"form__description"},"Vote and comment on others' rants. Post your own."),n.a.createElement("form",{name:"login"},n.a.createElement("div",{className:"login"},n.a.createElement("input",{type:"text",placeholder:"USERNAME",ref:function(t){e.usernameInput=t},value:this.state.username,name:"username",onChange:function(t){return e.handleUserInput(t)}}),n.a.createElement("input",{type:"password",placeholder:"PASSWORD",ref:function(t){e.passwordInput=t},value:this.state.password,name:"password",onChange:function(t){return e.handleUserInput(t)}}),n.a.createElement(E,{isLoading:this.state.showLoader}),n.a.createElement(_,{formErrors:this.state.formErrors}),n.a.createElement("input",{type:"submit",onClick:function(t){return e.submitForm(t)},value:"LET ME IN"})))))))}},{key:"componentDidUpdate",value:function(){}}]),t}(s.Component),w=a(27),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={showLoader:!1,username:"",password:"",formErrors:{username:"",password:""},userValid:!1,passwordValid:!1,formValid:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"popup "+(this.props.isOpen?"popup--open":"")},n.a.createElement("div",{className:"popup__header"},n.a.createElement("div",{title:"Close",className:"close layout--center",onClick:this.props.close},"X")),n.a.createElement("div",{className:"popup__body layout--center"},n.a.createElement("div",{className:"popup__body-inner"},n.a.createElement("div",{className:"form"},n.a.createElement("div",{className:"form__title"},"NEW ",n.a.createElement("span",{className:"highlight"},"#"),"RANT"),n.a.createElement("div",{className:"form__description"},"Express yourself with 140 characters."),n.a.createElement("form",{name:"new-rant"},n.a.createElement("div",{className:"new-rant"},n.a.createElement("textarea",{maxLength:"140"}),n.a.createElement(E,{isLoading:this.state.showLoader}),n.a.createElement(_,{formErrors:this.state.formErrors}),n.a.createElement("input",{type:"submit",value:"POST"})))))))}}]),t}(s.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("article",{className:"post"},n.a.createElement("div",{className:"post__inner"},n.a.createElement("div",{className:"score"},n.a.createElement("div",{className:"score__up layout--center"},"++"),n.a.createElement("div",{className:"score__board layout--center"},"100"),n.a.createElement("div",{className:"score__down layout--center"},"--")),n.a.createElement("div",{className:"post__body"},"Hello World...")),n.a.createElement("div",{className:"post__footer"},n.a.createElement("div",{className:"post__time"},"2m ago"),n.a.createElement("div",{className:"post__comments"},n.a.createElement("svg",{className:"icon",viewBox:"0 0 31 32"},n.a.createElement("path",{d:"M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781\r 0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657\r 8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0\r 3.922-2.61 7.23-6.186 8.294z"})),"23")))}}]),t}(s.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).showAddPopup=function(){a.setState({showAddPopup:!0})},a.hideAddPopup=function(){a.setState({showAddPopup:!1})},a.state={showLoader:!1,showAddPopup:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"post-list"},n.a.createElement(w.a,{to:"/rant/1"},n.a.createElement(y,null)),n.a.createElement("div",{className:"rant__add",title:"Add Rant",onClick:this.showAddPopup},"+"),n.a.createElement(E,{isLoading:this.state.showLoader}),n.a.createElement(b,{isOpen:this.state.showAddPopup,close:this.hideAddPopup}))}}]),t}(s.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={showLoader:!1,username:"",password:"",formErrors:{username:"",password:""},userValid:!1,passwordValid:!1,formValid:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"popup "+(this.props.isOpen?"popup--open":"")},n.a.createElement("div",{className:"popup__header"},n.a.createElement("div",{title:"Close",className:"close layout--center",onClick:this.props.close},"X")),n.a.createElement("div",{className:"popup__body layout--center"},n.a.createElement("div",{className:"popup__body-inner"},n.a.createElement("div",{className:"form"},n.a.createElement("div",{className:"form__title"},"NEW ",n.a.createElement("span",{className:"highlight"},"#"),"COMMENT"),n.a.createElement("div",{className:"form__description"},"Comment with 140 characters."),n.a.createElement("form",{name:"new-comment"},n.a.createElement("div",{className:"new-comment"},n.a.createElement("textarea",{maxLength:"140",ref:function(t){e.addCommentInput=t}}),n.a.createElement(E,{isLoading:this.state.showLoader}),n.a.createElement(_,{formErrors:this.state.formErrors}),n.a.createElement("input",{type:"submit",value:"COMMENT"})))))))}},{key:"componentDidUpdate",value:function(){this.addCommentInput.focus()}}]),t}(s.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).showAddCommentPopup=function(){a.setState({showAddCommentPopup:!0})},a.hideAddCommentPopup=function(){a.setState({showAddCommentPopup:!1})},a.state={showLoader:!1,showAddCommentPopup:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"rant-details layout--center"},n.a.createElement("section",{className:"post-hero"},n.a.createElement("div",{className:"post-hero__inner"},n.a.createElement("div",{className:"score"},n.a.createElement("div",{className:"score__up layout--center"},"++"),n.a.createElement("div",{className:"score__board layout--center"},"100"),n.a.createElement("div",{className:"score__down layout--center"},"--")),n.a.createElement("div",{className:"post-hero__body"},n.a.createElement("div",{className:"profile"},n.a.createElement("div",{className:"profile__picture"},n.a.createElement("svg",{height:"36",width:"36"},n.a.createElement("circle",{cx:"18",cy:"18",r:"18",fill:"#5c5f6f"}))),n.a.createElement("div",{className:"profile__name"},"Elon")),n.a.createElement("div",{className:"post__details"},"Lorem ipsum"))),n.a.createElement("div",{className:"post-hero__footer"},n.a.createElement("div",{className:"post-hero__delete"},"DELETE"),n.a.createElement("div",{className:"post-hero__time"},"2m ago"))),n.a.createElement("section",{className:"comments layout--center"},n.a.createElement("h1",{className:"comments__title"},n.a.createElement("span",null,"#"),"Comments"),n.a.createElement("section",{className:"comment"},n.a.createElement("div",{className:"comment__inner"},n.a.createElement("div",{className:"comment__body"},n.a.createElement("div",{className:"profile"},n.a.createElement("div",{className:"profile__picture"},n.a.createElement("svg",{height:"36",width:"36"},n.a.createElement("circle",{cx:"18",cy:"18",r:"18",fill:"#5c5f6f"}))),n.a.createElement("div",{className:"profile__name"},"Elon")),n.a.createElement("div",{className:"post__details"},"Lorem ipsum",n.a.createElement("br",null)))),n.a.createElement("div",{className:"comment__footer"},n.a.createElement("div",{className:"comment__delete"},"DELETE"),n.a.createElement("div",{className:"comment__time"},"2m ago")))),n.a.createElement("div",{className:"rant__comment layout--center",title:"Comment",onClick:this.showAddCommentPopup},n.a.createElement("svg",{className:"icon",viewBox:"0 0 31 32",width:"100%",height:"100%"},n.a.createElement("path",{d:"M24.732 24.371v7.629l-7.267-7.267h-8.808c-4.781\r 0-8.657-3.875-8.657-8.657v-7.42c0-4.781 3.876-8.657\r 8.657-8.657h13.604c4.781 0 8.657 3.875 8.657 8.657v7.42c0\r 3.922-2.61 7.23-6.186 8.294z"}))),n.a.createElement(E,{isLoading:this.state.showLoader}),n.a.createElement(j,{isOpen:this.state.showAddCommentPopup,close:this.hideAddCommentPopup}))}}]),t}(s.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).showLogin=function(){a.setState({showLogin:!0})},a.hideLogin=function(){a.setState({showLogin:!1})},a.hideAlert=function(){a.setState({showAlert:!1})},a.state={showLogin:!1,showLoader:!1,showAlert:!1,alert:{title:"sss",description:"sssssssssssss"}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"page"},n.a.createElement(h,{showLogin:this.showLogin}),n.a.createElement("section",{className:"main layout--center"},n.a.createElement("div",{className:"main__content layout--wrapped"},n.a.createElement(u.a,{exact:!0,path:"/",component:O}),n.a.createElement(u.a,{exact:!0,path:"/rant/1",component:g}))),n.a.createElement(E,{isLoading:this.state.showLoader}),n.a.createElement(N,{isOpen:this.state.showLogin,hideLogin:this.hideLogin}),n.a.createElement(v,{show:this.state.showAlert,title:this.state.alert.title,description:this.state.alert.description,close:this.hideAlert}))))}}]),t}(s.Component),L=(a(25),document.getElementById("root"));c.a.render(n.a.createElement(C,null),L)}},[[16,1,2]]]);
//# sourceMappingURL=main.b3cc732d.chunk.js.map