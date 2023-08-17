import classnames from 'classnames'
import Image from 'next/image';

interface Item {
    title: string;
    description?: string;
    icon?: string;
  }
  
  export interface Props {
    title?: string;
    subtitle?: string;
    highlight?: string;
    content?: string;
    items?: Array<Item>;
    image?: string | any; // TODO: find HTMLElementProps
    isReversed?: boolean;
    isAfterContent?: boolean;
  }

export function Content({title, subtitle, highlight, content, items, image, isReversed, isAfterContent}: Props){
    const sectionClass = classnames(
            'bg-blue-50 dark:bg-slate-800 py-16 md:py-20',
            {'pt-0 md:pt-0': isAfterContent}
        )
    return(
        <section className={sectionClass}>
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                {
                (title || subtitle || highlight) && (
                    <div className="mb-10 md:mx-auto text-center md:mb-12 max-w-3xl">
                    {highlight && (
                        <p className="text-base text-primary dark:text-blue-200 font-semibold tracking-wide uppercase">
                            {highlight}
                        </p>
                    )}
                    {title && (
                        <h2 className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
                            {title}
                        </h2>
                    )}

                    {subtitle && (
                        <p className="max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400">
                            {subtitle}
                        </p>
                    )}
                    </div>
                )
                }
            </div>
            <div className="mx-auto max-w-7xl p-4 md:px-8">
                <div className={`md:flex ${isReversed ? 'md:flex-row-reverse' : ''} md:gap-16`}>
                <div className="md:basis-1/2 self-center">
                    {content && 
                        <div className="mb-12 text-lg dark:text-slate-400">
                            {content}
                        </div>   
                    }

                    {
                    items && (
                        <div className="space-y-8">
                        {items.map(({ title: title2, description, icon }, index) => (
                            <div className="flex" key={index}>
                                <div className="flex-shrink-0">
                                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-gray-50">
                                    {/* <Icon name={icon ? icon : 'tabler:check'} className="w-5 h-5" /> */}
                                    </div>
                                </div>
                                <div className="ml-4">
                                    {title2 && <h3 className="text-lg font-medium leading-6 dark:text-white">{title2}</h3>}
                                    {description && <p className="mt-2 text-muted dark:text-slate-400">
                                        {description}
                                    </p>}
                                </div>
                            </div>
                        ))}
                        </div>
                    )
                    }
                    </div>
                    <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
                        {image && (
                            <div className="relative m-auto max-w-4xl">
                                {typeof image === 'string' ? (
                                    <>{image}</>
                                ) : (
                                    <Image
                                    alt=""
                                    className="mx-auto w-full rounded-lg bg-gray-500 shadow-lg"
                                    width={500}
                                    height={500}
                                    widths={[400, 768]}
                                    sizes="(max-width: 768px) 100vw, 432px"
                                    aspectRatio="500:500"
                                    {...image}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}