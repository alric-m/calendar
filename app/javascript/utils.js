import moment from 'moment'

export const formatDate = (date) => {
  return moment(date).format("DD MMMM YYYY, [at] hh[h]mm")
}
