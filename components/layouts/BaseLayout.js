import Header from '../shared/Header';

const BaseLayout = ({children, className = ''}) => {
  return (
    <React.Fragment>
      <Header/>
      <main className={`cover ${className}`}>
        {children}
      </main>
    </React.Fragment>
  )
}

export default BaseLayout;