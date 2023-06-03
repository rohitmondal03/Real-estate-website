import React from 'react'


// STYLES
import "./Contact.css"


// MANTINE UI COMPONENTS
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core'
import { useForm } from '@mantine/form'



const Contact = () => {

    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            name: (value) => (value.length < 2 ? 'Name must be at least 2 letetrs' : null),
        },
    });


    return (
        <div className='bg-zinc-300 py-20'>
            <h1 className='text-center text-5xl font-bold'>Contact Us</h1>

            <div className=''>
                <div className='contact_form'>
                    <Box maw={400} mx="auto">
                        <form onSubmit={form.onSubmit((values) => console.log(values))}>
                            <TextInput
                                withAsterisk
                                label="Email"
                                className='my-4'
                                placeholder="your@email.com"
                                {...form.getInputProps('email')}
                            />

                            <TextInput
                                withAsterisk
                                label="Name"
                                placeholder="yourname"
                                className=''
                                {...form.getInputProps('name')}
                            />

                            <Checkbox
                                mt="md"
                                label="Do you want to recieve notifications ?"
                                {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                            />

                            <Group position="right" mt="md">
                                <Button
                                    type="submit"
                                    className='bg-sky-500 transition-all duration-300'
                                >
                                    Submit
                                </Button>
                            </Group>
                        </form>
                    </Box>
                </div>

                <div className='contact_address'>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact