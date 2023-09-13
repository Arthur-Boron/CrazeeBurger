import { styled } from 'styled-components'
import ImagePreview from '../pages/order/Main/Admin/AdminPanel/ImagePreview'
import { theme } from '../../theme'
import TextInput from './TextInput'
import React from 'react'
import SelectInput from './SelectInput'

const Form = React.forwardRef(({data, product, onSubmit, onChange, children}, ref) => {
  return (
    <FormStyled action='submit' onSubmit={onSubmit}>
        <ImagePreview imageSource={product.imageSource} title={product.title} />
        <div className='inputFields'>
            {
                data.map((input) => {
                    if (input.type === 'select') {
                        return (
                            <SelectInput
                                {...input}
                                onChange={onChange}
                                ref={ref && input.name === "title" ? ref : null}
                                version="dark"
                            />
                        );
                    } else {
                        return (
                            <TextInput
                                {...input}
                                onChange={onChange}
                                ref={ref && input.name === "title" ? ref : null}
                                version="dark"
                            />
                        );
                    }
                })
            }
        
        </div>
        <div className='submitButton'>
            {children}
        </div>
    </FormStyled>
  )
})

const FormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    grid-row-gap: ${theme.spacing.xs};
    grid-column-gap: ${theme.spacing.md};
    
    .inputFields {
        grid-area: 1/2/4/2;
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        margin-right: 20px;
        grid-column-gap: ${theme.spacing.xs};
    }

    .title {
        grid-area: 1/1/2/4;
    }

    .imageSource {
        grid-area: 2/1/3/4;
    }

    .submitButton {
        grid-area: 4/2/5/3;
    } 
`

export default Form