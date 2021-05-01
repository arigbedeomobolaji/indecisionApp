const Layout = (props) => {
 return (
  <div>
   <h1>Header</h1>
  {/* Using props */}
   {/* {props.showcase} */}

   {/* Using inline JSX props.children */}
   {props.children}
   
   <h1>Footer</h1>
  </div>
 )
}

// There are two ways to pass dynamic pages to component

/* 

//1. - using props
const template = (
 <div>
  <h3>Welcome to my Website</h3>
  <p>This is my website</p>
 </div>
)
ReactDOM.render(<Layout showcase={template} />, document.getElementById("app"))
 
//2. using props.children - this is what most third party library uses
ReactDOM.render(<Layout>
 <div>
  <h3>Pages created using Inline JSX</h3>
  <p>I created this page using inline JSX and it is what most third party libraries use.</p>
 </div>
</Layout>, document.getElementById("app"))

 */

