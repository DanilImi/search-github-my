import styles from './reposit.module.scss'

const Reposit = ({repo}) => {
	let newrepositProps = repo
	let nameReposit = newrepositProps.name
	let descriptionReposit = newrepositProps.description
  return (
	 <div className={styles.reposit}>
		<a 
			className={styles.innerreposit} 
			href={newrepositProps.html_url} 
			target={"_blank"} 
			rel="noopener noreferrer"
		>
			{nameReposit}
		</a>
		<div className={styles.description}>
			{descriptionReposit === null ? 'not description' : descriptionReposit}
		</div>
	 </div>
  )
}

export default Reposit