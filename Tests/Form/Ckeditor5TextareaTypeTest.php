<?php
declare(strict_types=1);

namespace Xearts\Symfony\UX\Ckeditor5\Tests;

use PHPUnit\Framework\TestCase;
use Symfony\Component\Form\FormFactoryInterface;
use Twig\Environment;
use Xearts\Symfony\UX\Ckeditor5\Form\Ckeditor5TextareaType;
use Xearts\Symfony\UX\Ckeditor5\Tests\Kernel\TwigAppKernel;

class Ckeditor5TextareaTypeTest extends TestCase
{
    public function testRenderForm()
    {
        $kernel = new TwigAppKernel('test', true);
        $kernel->boot();
        $container = $kernel->getContainer()->get('test.service_container');

        $form = $container->get(FormFactoryInterface::class)->createBuilder()
            ->add('photo', Ckeditor5TextareaType::class, ['attr' => ['data-controller' => 'mydropzone']])
            ->getForm()
        ;

        $rendered = $container->get(Environment::class)->render('form.html.twig', ['form' => $form->createView()]);

        $this->assertSame(
            '<form name="form" method="post"><div id="form"><div><label for="form_photo" class="required">Photo</label>
  <textarea id="form_photo" name="form[photo]" required="required" data-controller="mydropzone xearts--symfony-ux-ckeditor5--ckeditor5" data-xearts--symfony-ux-ckeditor5--ckeditor5-config-value="[]" data-xearts--symfony-ux-ckeditor5--ckeditor5-image-upload-url-value="" data-xearts--symfony-ux-ckeditor5--ckeditor5-image-upload-csrf-token-value=""></textarea></div></div></form>',
            str_replace(' >', '>', $rendered)
        );
    }
}
