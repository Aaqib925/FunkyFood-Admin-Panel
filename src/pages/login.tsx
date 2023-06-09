import NextImage from '@/components/NextImage';
import Button from '@/components/buttons/Button';
import Input from '@/components/inputs/Input';
import UnstyledLink from '@/components/links/UnstyledLink';
import APP_IMAGES from '@/constant/images';
import useLoaded from '@/hooks/useLoaded';
import clsx from 'clsx';
import React, { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import FirebaseHelper from '@/utils/firebase';
import { Alert } from '@mantine/core';
import { useLoginUser } from '@/hooks/login/mutations';

enum InputType {
  EMAIL = 'email',
  PASSWORD = 'password'
}

const inputFieldData = [
  {
    labelText: 'Email',
    labelId: 'UserEmail',
    placeholderText: 'Enter your email',
    inputType: InputType.EMAIL,
  },
  {
    labelText: 'Password',
    labelId: 'UserPassword',
    placeholderText: 'Enter your password',
    inputType: InputType.PASSWORD,
  },
]

interface LoginFormInput {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
});


const LoginScreen = () => {
  const isLoaded = useLoaded();
  const { isLoading: isLoadingLoginUser, mutate: loginUserAction } = useLoginUser();

  const [firebaseLoginLoading, setFirebaseLoginLoading] = React.useState(false);

  const { control, handleSubmit, formState: { isValid }, watch, setError, clearErrors } = useForm<LoginFormInput>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const onSubmit = useCallback(async (data: LoginFormInput) => {
    try {
      setFirebaseLoginLoading(true);
      FirebaseHelper.signInWithEmailAndPassword(data.email, data.password)
        .then((userCredential) => {
          const userDetails = userCredential.user;
          setFirebaseLoginLoading(false);
          loginUserAction({
            email: data?.email,
            password: data.password
          })
          router.push('/dashboard/products');
        }).catch((error) => {
          setFirebaseLoginLoading(false);
          const errorCode = error.code;
          if (errorCode === 'auth/user-not-found') {
            alert("User not found, please check your email and password");
          }
          else if (errorCode === 'auth/wrong-password') {
            alert("Wrong password, please check your email and password");
          }
          else {
            alert("Error, something went wrong, please try again");
          }
        });
    }
    catch (error) {
      console.log(error, "THIS IS ERROR");
    }

  }, [])

  return (
    <section
      className={clsx(
        'flex min-h-screen flex-row justify-center items-stretch',
        isLoaded && 'fade-in-start'
      )}
    >
      <section className={'w-1/2 flex justify-center items-center'}>
        <div>
          <div className={'mb-[35px]'}>
            <h1 className={'font-[KumbhSans-SemiBold] text-3xl text-black leading-[37px] mb-2'}>Welcome To Funky Admin</h1>
            <p className={'font-[KumbhSans-Regular] text-base text-[#78778B] leading-[20px]'}>Welcome! Please enter your details</p>
          </div>
          <div className='w-[404px]'>
            <div className='flex flex-col items-stretch gap-y-[5px] mb-5'>

              {
                inputFieldData.map((item, index) => {
                  return (
                    <Controller
                      key={index}
                      control={control}
                      render={({ field, fieldState }) => {
                        return (
                          <Input
                            onChangeValue={(props) => {
                              clearErrors(item.inputType as InputType);
                              field.onChange(props)
                            }}
                            label={item.labelText}
                            type={item.inputType}
                            placeholder={item.placeholderText}
                            labelId={item.labelId}
                            value={field.value}
                            errorMessage={fieldState.error?.message}
                            labelClassName={'font-[KumbhSans-Medium] block text-sm text-left text-black py-[10px]'}
                            inputClassName={'w-full font-[KumbhSans-Medium] text-sm text-[#78778B] leading-[17px] border border-[#282541] border-solid rounded-[10px] pt-[15px] pr-[25px] pb-4 pl-5 shadow-sm'}
                          />
                        )
                      }}
                      name={item.inputType as InputType}
                      defaultValue={""}
                    />
                  )

                })
              }

            </div>
            <div className='flex justify-between items-center mb-[25px]'>
              <span className='flex items-center'>
                <input
                  type="checkbox"
                  id="RememberMe"
                  className="input-[type='checkbox'] w-[16px] h-[16px] border border-solid border-[#78778B] rounded-[3px] mr-[9px] cursor-pointer"
                />
                <label htmlFor="RememberMe" className="font-[KumbhSans-Medium] text-sm text-black leading-[17px] cursor-pointer">
                  Remember me
                </label>
              </span>
              <span>
                <UnstyledLink href='/auth/login' className="font-[KumbhSans-Medium] text-sm text-black leading-[17px] cursor-pointer">
                  Forgot password
                </UnstyledLink>
              </span>
            </div>
            <div>
              <Button
                variant='primary'
                className='rounded-[10px] w-full flex justify-center items-center h-12 bg-[#F2D799] border-none hover:bg-[#F2D799] active:bg-[#F2D79981] disabled:bg-[#F2D79981]'
                disabled={!isValid}
                onClick={handleSubmit(onSubmit)}
                isLoading={firebaseLoginLoading || isLoadingLoginUser}
              >
                <span className='font-[KumbhSans-SemiBold] text-base text-[#1B212D] leading-5 '>Sign in</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className={'w-1/2 flex justify-center items-center relative z-10'}>
        <div className='absolute inset-0 blur-sm' style={styles.loginBanner}></div>
        <div className='relative z-30 rounded-full shadow-2xl'>
          <NextImage
            useSkeleton
            src={APP_IMAGES.sideMenuLogo}
            alt='Login'
            width={150}
            height={150}
            imgClassName='w-full rounded-full'
            className='w-full rounded-full'
          />
        </div>
      </section>
    </section>
  )
}

const styles = {
  loginBanner: {
    backgroundImage: `url(${APP_IMAGES.loginBackImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }
}

export default LoginScreen