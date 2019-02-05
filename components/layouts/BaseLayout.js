import Header from '../shared/Header';

const BaseLayout = ({children, className}) => {
  return (
    <div className="layout-container">
      <Header/>
      <main className={`cover ${className}`}>
        {children}
      </main>
    </div>
  )
}

export default BaseLayout;