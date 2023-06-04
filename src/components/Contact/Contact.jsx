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

            <div className='flex flex-row justify-evenly items-center mt-20'>
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

                            <Group
                                position="center"
                                mt="md"
                            >
                                <Button
                                    type="submit"
                                    className='text-lg bg-sky-500 transition-all duration-300 my-5 hover:scale-110 active:scale-90'
                                >
                                    Submit
                                </Button>
                            </Group>
                        </form>
                    </Box>
                </div>

                <div className='contact_address bg-white p-10'>
                    <h1 className='text-4xl font-bold mb-10'>Contact Information</h1>

                    <div className='address'>
                        <h4>Address</h4>
                        <p className='first-child'>717 Market Street</p>
                        <p>San Fransisco, CA 94103</p>
                    </div>

                    <div className='phn'>
                        <h4>Phone Number</h4>
                        <p className='first-child'>+91-994XXXXXXX</p>
                    </div>

                    <div>
                        <h4>Email</h4>
                        <p
                            href=''
                            target='_blank'
                            className='underline'
                        >
                            company.estate@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact