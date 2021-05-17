<?php
declare(strict_types=1);

namespace Xearts\Symfony\UX\Ckeditor5\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class Ckeditor5TextareaType extends AbstractType
{
    /**
     * @var UrlGeneratorInterface | null
     */
    private $urlGenerator;

    /**
     * @var CsrfTokenManagerInterface | null
     */
    private $tokenManager;

    public function __construct(?UrlGeneratorInterface $urlGenerator = null, ?CsrfTokenManagerInterface $tokenManager = null)
    {
        $this->urlGenerator = $urlGenerator;
        $this->tokenManager = $tokenManager;
    }

    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        if ($options['image_upload_url']) {
            $view->vars['image_upload_url'] = $options['image_upload_url'];
        } else if ($options['image_upload_route'] && $this->urlGenerator) {
            $view->vars['image_upload_url'] = $this->urlGenerator->generate(
                $options['image_upload_route'], $options['image_upload_route_params']
            );
        }

        if ($options['image_upload_csrf_token_id'] && $this->tokenManager) {
            $token = $this->tokenManager->getToken($options['image_upload_csrf_token_id'])->getValue();
            $view->vars['image_upload_csrf_token'] = $token;
        }
        $view->vars['ckeditor5_options'] = \json_encode($options['ckeditor5_options'], JSON_FORCE_OBJECT);
    }


    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefault('image_upload_url', '')
            ->setAllowedTypes('image_upload_url', ['string'])
        ;
        $resolver
            ->setDefault('image_upload_route', '')
            ->setAllowedTypes('image_upload_route', ['string'])
        ;
        $resolver
            ->setDefault('image_upload_route_params', [])
            ->setAllowedTypes('image_upload_route_params', ['array'])
        ;
        $resolver
            ->setDefault('image_upload_csrf_token_id', '')
            ->setAllowedTypes('image_upload_csrf_token_id', ['string'])
        ;
        $resolver
            ->setDefault('ckeditor5_options', [])
            ->setAllowedTypes('ckeditor5_options', ['array'])
        ;
    }

    public function getParent()
    {
        return TextareaType::class;
    }

    public function getBlockPrefix()
    {
        return 'xearts_ckeditor5_textarea';
    }
}
