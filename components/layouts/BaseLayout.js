import Header from '../shared/Header';

const BaseLayout = ({children, className = '', isAuthenticated}) => {
  return (
    <React.Fragment>
      <Header isAuthenticated={isAuthenticated}/>
      <main className={`cover ${className}`}>
        {children}
      </main>
    </React.Fragment>
  )
}

export default BaseLayout;