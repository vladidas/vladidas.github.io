import auth from './auth/getter'
import applications from './applications/getter'
import widgets from './widgets/getter'

export default {
  ...auth,
  ...applications,
  ...widgets,
};
