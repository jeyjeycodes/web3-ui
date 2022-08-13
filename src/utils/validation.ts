import * as yup from 'yup';

export const genericSchema = yup
  .object({
    customerEmail: yup.string().required().email(),
    customerName: yup.string().required(),
    yesOrNoOption: yup.string().required(),
    yesExtraOption: yup.string().when('yesOrNoOption', {
      is: 'yes',
      then: yup.string().required()
    })
  })
  .required();
