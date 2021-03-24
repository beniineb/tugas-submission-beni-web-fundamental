class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }
    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            background-color: #dddddd;
            color: #26001b;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            text-align: center;
        }

        nav li {
            display: inline;
            list-style-type: none;
            margin-right: 70px;
         }
         
         nav a {
             font-size: 30px;
             font-weight: 400;
             text-decoration: none;
             color: black;
         }
        
         nav {
            padding: 8px;
           background-color: #f9f3f3 ; 
           position: sticky;
           top: 0;
        }
        
         nav a {
            font-size: 18px;
            font-weight: 400;
            text-decoration: none;
            color: #be4bdb;
            
         }
         nav a:hover {
             font-weight: bold;
         }

        h2 {
            padding: 16px;
        }
        </style>
        <h2> <nav>
        <ul>
            <li><a href="#">Beranda</a></li>	
            <li><a href="#">Personal</a></li>	
            <li><a href="#">Company</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
        </ul>   </h2> </nav>`
    }
}

customElements.define("app-bar", AppBar);