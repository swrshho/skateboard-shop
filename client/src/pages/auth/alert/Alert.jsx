import { useSelector } from 'react-redux'
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
const Alert = ({ closeHandler }) => {
	const { errorMessage } = useSelector((state) => state.auth)
	return (
		<div className='flex justify-between rounded bg-red p-3 text-white'>
			<div className='flex'>
				<ReportProblemOutlinedIcon className='mr-2' />
				<h3>{errorMessage}</h3>
			</div>
			<CloseOutlinedIcon
				className='cursor-pointer justify-self-end'
				onClick={closeHandler}
			/>
		</div>
	)
}

export default Alert
