import Vue from 'vue';
import Login from './login.vue';

const componentFns = [
    {name: 'login', component: Login},
];

function install() {
    componentFns.map(componentFn => {
        const componentFnName = componentFn.name;
        const componentFnComponent = componentFn.component;
        function fun(options = {}) {
            const buildDiv = document.createElement('div');
            buildDiv.id = componentFnName;
            document.body.appendChild(buildDiv);
            const extendModal = Vue.extend(componentFnComponent);
            const instance = new extendModal(options);
            const component = instance.$mount(`#${componentFnName}`);
            return component;
        }
        Vue.prototype[`$${componentFnName}`] = fun;
    });
}

const MycomponentFns = {
    install
};

export default MycomponentFns;
