(this["webpackJsonpreact-folder"]=this["webpackJsonpreact-folder"]||[]).push([[0],{43:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(14),c=r.n(a),s=r(3),l=r(4),o=r(15),i=r(16),h=r(19),d=r(18),u=r(0),m=function(e){return Object(u.jsxs)("table",{className:"table table-dark table-striped table-hover text-center table-sortable",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Picture"}),Object(u.jsx)("th",{scope:"col","data-name":"name","data-sortable":"true",children:Object(u.jsx)("span",{onClick:function(){return e.sortBy("name","last","first")},children:"Full Name"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("span",{onClick:function(){return e.sortBy("email")},children:"Email Address"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("span",{onClick:function(){return e.sortBy("phone")},children:"Phone Number"})})]})}),Object(u.jsx)("tbody",{children:e.state.filteredEmployees.map((function(e){var t=e.name,r=t.first,n=t.last,a="".concat(r," ").concat(n);return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:e.picture.thumbnail,alt:a})}),Object(u.jsx)("td",{className:"align-middle",children:a}),Object(u.jsx)("td",{className:"align-middle email",children:Object(u.jsx)("a",{href:"mailto:".concat(e.email),children:e.email})}),Object(u.jsx)("td",{className:"align-middle",children:Object(u.jsx)("a",{href:"tel:+1".concat(e.phone),children:e.phone})})]},e.login.uuid)}))})]})},j=function(e){return Object(u.jsx)("nav",{className:"navbar navbar-light bg justify-content-center",children:Object(u.jsx)("form",{className:"form-inline m-2",onSubmit:e.handleFormSubmit,children:Object(u.jsx)("input",{className:"form-control",value:e.value,name:"search",onChange:e.handleInputChange,type:"search",placeholder:"Search"})})})},b=r(17),p=r.n(b),f=function(){return p.a.get("https://randomuser.me/api/?results=150&nat=us")},O=function(e){Object(h.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={search:"",employees:[],filteredEmployees:[],sortDir:e.sortDirectory},e.handleFormSubmit=function(e){e.preventDefault()},e.handleInputChange=function(t){var r=t.target.value;e.setState({search:r}),e.filterEmployeesData(r.toLowerCase().trim())},e.filterEmployeesData=function(t){t?e.setState({filteredEmployees:e.state.employees.filter((function(e){return e.name.first.toLowerCase().concat(" ",e.name.last.toLowerCase()).includes(t)||e.phone.includes(t)||e.phone.replace(/[^\w\s]/gi,"").includes(t)||e.email.includes(t)}))}):e.setState({filteredEmployees:e.state.employees})},e.sortBy=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.state.filteredEmployees;e.state.sortDir[t]?e.setState({filteredEmployees:a.reverse(),sortDir:Object(l.a)(Object(l.a)({},e.sortDirectory),{},Object(s.a)({},t,"asc"===e.state.sortDir[t]?"desc":"asc"))}):(a=e.state.filteredEmployees.sort((function(e,a){return e=e[t],a=a[t],r?n&&e[r]===a[r]?e[n].localeCompare(a[n]):e[r].localeCompare(a[r]):e.localeCompare(a)})),e.setState({filteredEmployees:a,sortDir:Object(l.a)(Object(l.a)({},e.sortDirectory),{},Object(s.a)({},t,"asc"))}))},e}return Object(i.a)(r,[{key:"sortDirectory",get:function(){return{name:"",email:"",phone:""}}},{key:"componentDidMount",value:function(){var e=this;f().then((function(t){return e.setState({employees:t.data.results,filteredEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(u.jsx)("div",{className:"container mt",children:Object(u.jsx)(m,{state:this.state,sortBy:this.sortBy,filteredEmployees:this.filterEmployeesData})})]})}}]),r}(n.Component),y=(r(43),function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{className:"text-center",children:"Employee Directory"}),Object(u.jsx)("p",{className:"text-center",children:"Search by name or click on the columns to filter."})]})});var x=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(y,{}),Object(u.jsx)(O,{})]})};r(44);c.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.758369c6.chunk.js.map