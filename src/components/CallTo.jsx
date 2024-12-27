import PropTypes from 'prop-types'

const CallTo = ({ phone, children }) => {
  return <a href={`tel:${phone}`}>{children}</a>
}

CallTo.propTypes = {
  phone: PropTypes.string,
  children: PropTypes.element,
}

export default CallTo
